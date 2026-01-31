import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ZipperCollectionPage from './pages/ZipperCollectionPage';
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Admin imports
import { AuthProvider } from './contexts/AuthProvider';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCategories from './pages/admin/AdminCategories';
import AdminCategoryForm from './pages/admin/AdminCategoryForm';
import AdminSubcategories from './pages/admin/AdminSubcategories';
import AdminSubcategoryForm from './pages/admin/AdminSubcategoryForm';
import AdminProducts from './pages/admin/AdminProducts';
import AdminProductForm from './pages/admin/AdminProductForm';
import ProtectedRoute from './components/admin/ProtectedRoute';

// Use basename for GitHub Pages deployment
const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <AuthProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<ZipperCollectionPage />} />
            <Route
              path="products/:categorySlug"
              element={<CategoryPage />}
            />
            <Route
              path="products/:categorySlug/:subcategorySlug"
              element={<SubcategoryPage />}
            />
            <Route path="product/:productSlug" element={<ProductDetailPage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route path="contact-us" element={<ContactPage />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="categories" element={<AdminCategories />} />
            <Route path="categories/new" element={<AdminCategoryForm />} />
            <Route path="categories/:id" element={<AdminCategoryForm />} />
            <Route path="subcategories" element={<AdminSubcategories />} />
            <Route path="subcategories/new" element={<AdminSubcategoryForm />} />
            <Route path="subcategories/:id" element={<AdminSubcategoryForm />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="products/new" element={<AdminProductForm />} />
            <Route path="products/:id" element={<AdminProductForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
