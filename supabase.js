// ==========================================
// Supabase Configuration & Connection
// ==========================================

// ⚠️ استبدل هذه القيم بمفاتيحك من ملف .env أو من Supabase Dashboard
const SUPABASE_URL = 'https://apjnwyvrcbpxiffsupew.supabase.co';  // ← استبدل هذا
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwam53eXZyY2JweGlmZnN1cGV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0NTE3MzIsImV4cCI6MjA4ODAyNzczMn0.b8G0CmIZhkMvwmTckyE1dvo_xmsXK7pflCa2TK8uVIc';           // ← استبدل هذا

// Initialize Supabase Client
let supabase;

try {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    console.log('✅ Supabase connected successfully');
} catch (error) {
    console.error('❌ Failed to connect to Supabase:', error);
    supabase = null;
}

// ==========================================
// Database Functions
// ==========================================

// جلب جميع المصادر
async function getResources(category = 'all') {
    try {
        let query = supabase
            .from('resources')
            .select(`
                *,
                categories (name, icon, color)
            `);
        
        if (category !== 'all') {
            query = query.eq('category_id', category);
        }
        
        const { data, error } = await query.order('views', { ascending: false });
        
        if (error) throw error;
        return data;
        
    } catch (error) {
        console.error('Error fetching resources:', error);
        return [];
    }
}

// جلب التصنيفات
async function getCategories() {
    try {
        const { data, error } = await supabase
            .from('categories')
            .select('*')
            .order('id');
        
        if (error) throw error;
        return data;
        
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

// إضافة مصدر للمفضلة
async function addToFavorites(resourceId) {
    try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
            alert('يجب تسجيل الدخول أولاً');
            return false;
        }
        
        const { data, error } = await supabase
            .from('favorites')
            .insert([
                { user_id: user.id, resource_id: resourceId }
            ]);
        
        if (error) throw error;
        return true;
        
    } catch (error) {
        console.error('Error adding favorite:', error);
        return false;
    }
}

// زيادة عدد المشاهدات
async function incrementViews(resourceId) {
    try {
        const { data, error } = await supabase.rpc('increment_resource_views', {
            resource_id: resourceId
        });
        
        if (error) throw error;
        
    } catch (error) {
        console.error('Error incrementing views:', error);
    }
}

// ==========================================
// Authentication Functions
// ==========================================

// تسجيل الدخول بالبريد
async function signInWithEmail(email, password) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        
        if (error) throw error;
        
        console.log('✅ Signed in successfully:', data);
        return data;
        
    } catch (error) {
        console.error('❌ Sign in error:', error.message);
        alert('خطأ في تسجيل الدخول: ' + error.message);
        return null;
    }
}

// تسجيل مستخدم جديد
async function signUpWithEmail(email, password, fullName) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: fullName
                }
            }
        });
        
        if (error) throw error;
        
        console.log('✅ Signed up successfully:', data);
        alert('تم إنشاء الحساب! تحقق من بريدك الإلكتروني.');
        return data;
        
    } catch (error) {
        console.error('❌ Sign up error:', error.message);
        alert('خطأ في إنشاء الحساب: ' + error.message);
        return null;
    }
}

// تسجيل الخروج
async function signOut() {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        console.log('✅ Signed out successfully');
        
    } catch (error) {
        console.error('❌ Sign out error:', error);
    }
}

// الحصول على المستخدم الحالي
async function getCurrentUser() {
    try {
        const { data: { user } } = await supabase.auth.getUser();
        return user;
        
    } catch (error) {
        console.error('Error getting user:', error);
        return null;
    }
}

// ==========================================
// Real-time Subscriptions (اختياري)
// ==========================================

// الاشتراك في تغييرات المصادر
function subscribeToResources(callback) {
    return supabase
        .channel('resources_changes')
        .on('postgres_changes', 
            { event: '*', schema: 'public', table: 'resources' },
            (payload) => {
                console.log('Change received!', payload);
                callback(payload);
            }
        )
        .subscribe();
}

// ==========================================
// Export Functions for Global Access
// ==========================================

window.supabaseClient = supabase;
window.db = {
    getResources,
    getCategories,
    addToFavorites,
    incrementViews
};
window.auth = {
    signIn: signInWithEmail,
    signUp: signUpWithEmail,
    signOut,
    getCurrentUser
};
