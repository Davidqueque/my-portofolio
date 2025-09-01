import homePage from "../assets/school/index.png";
import adminDashboard from "../assets/school/admin_dashboard.png";
import studentPage from "../assets/school/student_page.png";
import registerPage from "../assets/school/register_page.png";
import loginPage from "../assets/school/login_page.png";
import addClassPage from "../assets/school/add_class.png";
import addStudentPage from "../assets/school/add_student.png";
import addTeacherPage from "../assets/school/add_teacher.png";
import databasePage from "../assets/school/database.png";
import updateProfilePage from "../assets/school/update_profile.png";
import viewCoursePage from "../assets/school/view_course.png";
import viewTeacherPage from "../assets/school/view_teacher.png";
import viewGradePage from "../assets/school/view_grade.png";
import viewStudentPage from "../assets/school/view_student.png";

import homePage2 from "../assets/inventory_system/home_page.png";
import adminDashboard2 from "../assets/inventory_system/admin_dashboard.png";
import addStockMovements from "../assets/inventory_system/add_stock_movements_page.png";
import categoriesPage from "../assets/inventory_system/categories_page.png";
import addProductsPage from "../assets/inventory_system/add_products_page.png";
import recentLowStocks from "../assets/inventory_system/recent_low_stock.png";
import stockMovementsPage from "../assets/inventory_system/stock_movements_page.png";
import suppliersPage from "../assets/inventory_system/suppliers_page.png";
import editCategoryPage from "../assets/inventory_system/edit_category_page.png";
import editProductPage from "../assets/inventory_system/edit_products_page.png";
import editSupplierPage from "../assets/inventory_system/edit_supplier_page.png";
import productsPage from "../assets/inventory_system/products_page.png";
import addCategoryPage from "../assets/inventory_system/add_category_page.png";
import addSupplierPage from "../assets/inventory_system/add_supplier_page.png";
export const projects = [
  {
    id: 1,
    title: "Basketball School Management System",
    description:
      "Sistem manajemen sekolah berbasis PHP dengan fitur admin dashboard, manajemen siswa, login/register, dan berbagai modul akademik.",
    image: homePage,
    screenshots: [
      {
        image: homePage,
        title: "Halaman Utama",
        description: "Tampilan beranda sistem manajemen sekolah.",
      },
      {
        image: loginPage,
        title: "Halaman Login",
        description: "Form login untuk admin, dan siswa.",
      },
      {
        image: registerPage,
        title: "Halaman Register",
        description: "Form pendaftaran akun pengguna baru.",
      },
      {
        image: adminDashboard,
        title: "Admin Dashboard",
        description:
          "Panel kontrol admin dengan ringkasan data siswa, guru, dan kelas.",
      },
      {
        image: studentPage,
        title: "Manajemen Siswa",
        description:
          "Halaman untuk melihat, menambah, dan mengelola data siswa.",
      },
      {
        image: addClassPage,
        title: "Tambah Kelas",
        description: "Form untuk menambahkan data kelas baru.",
      },
      {
        image: addStudentPage,
        title: "Tambah Siswa",
        description: "Form untuk menambahkan data siswa baru ke sistem.",
      },
      {
        image: addTeacherPage,
        title: "Tambah Guru",
        description: "Form untuk menambahkan data guru baru.",
      },
      {
        image: databasePage,
        title: "Manajemen Database",
        description: "Tampilan database sistem untuk debugging/monitoring.",
      },
      {
        image: updateProfilePage,
        title: "Update Profil",
        description: "Halaman untuk memperbarui data profil pengguna.",
      },
      {
        image: viewCoursePage,
        title: "Daftar Mata Pelajaran",
        description: "Halaman untuk melihat dan mengelola data mata pelajaran.",
      },
      {
        image: viewTeacherPage,
        title: "Daftar Guru",
        description: "Halaman untuk melihat data guru yang terdaftar.",
      },
      {
        image: viewGradePage,
        title: "Daftar Nilai",
        description: "Halaman untuk melihat nilai siswa per mata pelajaran.",
      },
      {
        image: viewStudentPage,
        title: "Daftar Siswa",
        description: "Halaman untuk melihat data siswa yang sudah terdaftar.",
      },
    ],
    tech: ["MySQL", "Bootstrap", "Javascript", "PHP"],
    github: "https://github.com/Davidqueque/basketball-school-web", // Update sesuai repo yang benar
    category: "web",
  },
  {
    id: 2,
    title: "Inventory Management System ",
    description:
      "Sistem manajemen inventaris berbasis Laravel dengan fitur CRUD, laporan stok, dan autentikasi pengguna.",
    image: homePage2,
    screenshots: [
      {
        image: homePage2,
        title: "Halaman Utama",
        description: "Tampilan beranda sistem manajemen inventaris.",
      },
      {
        image: adminDashboard2,
        title: "Admin Dashboard",
        description:
          "Panel kontrol admin dengan ringkasan data inventaris dan laporan stok.",
      },
      {
        image: addProductsPage,
        title: "Manajemen Produk",
        description: "Form untuk menambah data produk.",
      },
      {
        image: categoriesPage,
        title: "Manajemen Kategori",
        description:
          "Halaman untuk melihat, menambah, menghapus, dan mengelola data kategori.",
      },
      {
        image: suppliersPage,
        title: "Manajemen Supplier",
        description:
          "Halaman untuk melihat, menambah, menghapus, dan mengelola data supplier.",
      },
      {
        image: stockMovementsPage,
        title: "Manajemen Pergerakan Stok",
        description:
          "Halaman untuk melihat dan mengelola data pergerakan stok.",
      },
      {
        image: addStockMovements,
        title: "Tambah Pergerakan Stok",
        description: "Form untuk menambahkan data pergerakan stok baru.",
      },
      {
        image: recentLowStocks,
        title: "Laporan Stok Rendah",
        description: "Halaman untuk melihat laporan produk dengan stok rendah.",
      },
      {
        image: editCategoryPage,
        title: "Edit Kategori",
        description: "Form untuk mengedit data kategori yang sudah ada.",
      },
      {
        image: editProductPage,
        title: "Edit Produk",
        description: "Form untuk mengedit data produk yang sudah ada.",
      },
      {
        image: editSupplierPage,
        title: "Edit Supplier",
        description: "Form untuk mengedit data supplier yang sudah ada.",
      },
      {
        image: productsPage,
        title: "Daftar Produk",
        description: "Halaman untuk melihat data produk yang sudah terdaftar.",
      },
      {
        image: addCategoryPage,
        title: "Tambah Kategori",
        description: "Form untuk menambahkan data kategori baru.",
      },
      {
        image: addSupplierPage,
        title: "Tambah Supplier",
        description: "Form untuk menambahkan data supplier baru.",
      },
    ],
    tech: ["MySQL", "Bootstrap", "Blade", "Laravel"],
    github: "https://github.com/Davidqueque/inventory-system", // Update sesuai repo yang benar
    category: "web",
  },
];
