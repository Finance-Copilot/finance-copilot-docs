---
id: 02-business-requirement
title: Business Requirement
sidebar_position: 2
---

# Business Requirement

## Business Background

### Overview

Perkembangan teknologi finansial dan meningkatnya penggunaan e-wallet, mobile banking, serta transaksi digital membuat pengelolaan keuangan pribadi menjadi semakin kompleks.

Meskipun transaksi semakin mudah dilakukan, sebagian besar individu masih mengalami kesulitan dalam memahami kondisi keuangan mereka secara menyeluruh.

Banyak pengguna memiliki lebih dari satu rekening bank, dompet digital, dan sumber pemasukan yang berbeda, tetapi tidak memiliki sistem yang mampu memberikan gambaran finansial secara terpusat.

Sebagian besar aplikasi personal finance saat ini hanya berfungsi sebagai alat pencatatan transaksi dan visualisasi data historis. Pengguna tetap harus melakukan analisis sendiri untuk memahami kondisi keuangan dan membuat keputusan finansial.

Finance Copilot hadir untuk mengubah pendekatan tersebut dengan menghadirkan Artificial Intelligence sebagai asisten keuangan pribadi yang mampu membantu pengguna memahami kondisi finansial saat ini sekaligus memprediksi kondisi keuangan di masa depan.

---

## Current Problems

Saat ini pengguna menghadapi beberapa masalah utama dalam pengelolaan keuangan pribadi.

### Fragmented Financial Information

Saldo dan transaksi tersebar di berbagai platform seperti rekening bank, e-wallet, dan uang tunai sehingga sulit mendapatkan gambaran kondisi keuangan secara menyeluruh.

### Lack of Financial Awareness

Pengguna sering mengetahui jumlah saldo yang dimiliki, tetapi tidak memahami pola pengeluaran dan kebiasaan finansial mereka.

### No Financial Planning

Mayoritas pengguna tidak memiliki sistem yang dapat membantu mereka merencanakan pengeluaran, tabungan, dan target finansial.

### Reactive Decision Making

Keputusan keuangan sering dibuat berdasarkan kondisi saat ini tanpa mempertimbangkan dampak jangka menengah dan jangka panjang.

### Limited Financial Insight

Data transaksi tersedia, tetapi insight yang dapat ditindaklanjuti masih sangat minim.

---

# User Pain Points

## Manual Recording

### Problem

Pengguna harus membuka aplikasi dan mengisi formulir setiap kali melakukan transaksi.

### Impact

* Pencatatan tidak konsisten.
* Banyak transaksi yang terlewat.
* Data keuangan menjadi tidak akurat.

### Expected Solution

* Input transaksi melalui Telegram.
* OCR Receipt.
* AI Transaction Parsing.

---

## No Spending Visibility

### Problem

Pengguna tidak mengetahui kategori pengeluaran terbesar.

### Impact

* Sulit mengontrol pengeluaran.
* Sulit mengidentifikasi kebiasaan konsumtif.
* Sulit menentukan prioritas keuangan.

### Expected Solution

* Dashboard Analytics.
* Expense by Category.
* Spending Trend Analysis.

---

## No Financial Forecast

### Problem

Pengguna hanya mengetahui kondisi keuangan saat ini tanpa mengetahui kondisi keuangan yang akan datang.

### Impact

* Tidak mengetahui kapan saldo akan habis.
* Tidak mengetahui kemampuan menabung.
* Tidak mengetahui apakah target finansial dapat tercapai.

### Expected Solution

* Burn Rate Analysis.
* Cash Runway.
* Monthly Forecast.
* Goal Achievement Prediction.

---

## Difficult Reporting

### Problem

Laporan keuangan umumnya berupa angka dan grafik yang sulit dipahami.

### Impact

* Pengguna tidak memperoleh insight yang jelas.
* Pengguna tidak tahu tindakan yang harus dilakukan.

### Expected Solution

* AI Executive Summary.
* Financial Recommendations.
* Financial Health Score.

---

## Missing Receipt Evidence

### Problem

Struk pembelian sering hilang atau tidak tersimpan dengan baik.

### Impact

* Sulit melakukan audit transaksi.
* Sulit memverifikasi pengeluaran.

### Expected Solution

* Receipt Storage.
* OCR Extraction.
* Transaction Attachment.

---

# Business Opportunity

Finance Copilot memiliki peluang untuk mengisi celah antara aplikasi pencatatan keuangan tradisional dan layanan financial advisor.

### Opportunity 1 - AI Personal Finance Assistant

Sebagian besar aplikasi keuangan hanya berfungsi sebagai pencatat transaksi.

Finance Copilot dapat berkembang menjadi asisten keuangan pribadi berbasis AI yang mampu memberikan insight dan rekomendasi otomatis.

---

### Opportunity 2 - Financial Forecasting

Fitur forecasting masih jarang ditemukan pada aplikasi personal finance sederhana.

Kemampuan memprediksi kondisi keuangan menjadi nilai pembeda utama produk.

---

### Opportunity 3 - Financial Planning

Pengguna membutuhkan alat yang membantu mereka mencapai target finansial seperti:

* Dana Darurat
* Liburan
* Kendaraan
* Rumah
* Pendidikan

---

### Opportunity 4 - Financial Health Monitoring

Belum banyak aplikasi yang menyediakan skor kesehatan finansial yang mudah dipahami.

Financial Health Score dapat menjadi indikator utama kondisi finansial pengguna.

---

### Opportunity 5 - AI Generated Financial Insights

Kemampuan menghasilkan laporan keuangan otomatis dalam bahasa yang mudah dipahami dapat meningkatkan engagement dan retensi pengguna.

---

# Success Metrics

Keberhasilan produk akan diukur menggunakan metrik berikut.

## DAU (Daily Active Users)

Mengukur jumlah pengguna aktif harian.

Target Awal:

* 100+ DAU setelah MVP launch.

---

## MAU (Monthly Active Users)

Mengukur jumlah pengguna aktif bulanan.

Target Awal:

* 1.000+ MAU dalam 6 bulan pertama.

---

## Retention

Mengukur persentase pengguna yang tetap aktif menggunakan aplikasi.

Target Awal:

* 30-Day Retention > 40%

---

## Forecast Accuracy

Mengukur akurasi prediksi yang dihasilkan Forecast Engine.

Target Awal:

* Akurasi minimal 80%.

---

## Conversion Rate

Mengukur persentase pengguna Free yang beralih ke Pro.

Target Awal:

* 5% - 10% Conversion Rate.

---

# Business Flow

## Transaction Flow

Tujuan:

Mencatat seluruh aktivitas finansial pengguna.

Flow:

User
↓
Create Transaction
↓
Validation
↓
Store Transaction
↓
Update Wallet Balance
↓
Analytics Update
↓
Dashboard Update

---

## Telegram Flow

Tujuan:

Mempermudah pencatatan transaksi tanpa membuka aplikasi.

Flow:

User
↓
Telegram Bot
↓
n8n Workflow
↓
AI Parsing
↓
Transaction Validation
↓
Laravel API
↓
Database

---

## OCR Flow

Tujuan:

Mengubah foto struk menjadi transaksi otomatis.

Flow:

User Upload Receipt
↓
OCR Engine
↓
Text Extraction
↓
AI Parsing
↓
Confidence Scoring
↓
User Confirmation
↓
Create Transaction

Business Rule:

Confidence Score < 70

→ User Review Required

Confidence Score ≥ 70

→ Auto Suggest Transaction

---

## Budget Monitoring Flow

Tujuan:

Mengontrol pengeluaran berdasarkan budget yang telah ditentukan.

Flow:

User Create Budget
↓
Track Spending
↓
Budget Calculation
↓
Threshold Detection
↓
Notification Trigger

---

## Goal Contribution Flow

Tujuan:

Memantau progres pencapaian target finansial.

Flow:

User Create Goal
↓
Goal Contribution
↓
Goal Progress Calculation
↓
Achievement Forecast
↓
Dashboard Update

---

## Transfer Flow

Tujuan:

Mencatat perpindahan saldo antar wallet.

Flow:

User Create Transfer
↓
Reduce Source Wallet
↓
Increase Destination Wallet
↓
Create Transfer Record
↓
Update Balance

---

## Forecast Flow

Tujuan:

Memberikan prediksi kondisi keuangan di masa depan.

Flow:

Transaction Data
+
Budget
+
Recurring Transaction
+
Goal Data
↓
Forecast Engine
↓
Burn Rate Calculation
↓
Cash Runway Calculation
↓
Monthly Forecast
↓
Prediction Result

---

## Executive Summary Flow

Tujuan:

Menghasilkan laporan keuangan otomatis berbasis AI.

Flow:

Transactions
+
Budget
+
Goals
+
Forecast Result
↓
AI Processing
↓
Insight Generation
↓
Recommendation Generation
↓
Executive Summary
↓
Dashboard Display
