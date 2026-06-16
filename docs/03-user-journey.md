# User Journey

## Overview

Dokumen ini menjelaskan seluruh perjalanan pengguna (User Journey) saat menggunakan Finance Copilot, mulai dari registrasi hingga penggunaan fitur-fitur utama seperti Wallet, Transaction, Budget, Goals, Forecast, dan AI Executive Summary.

Tujuan utama dari User Journey adalah memastikan pengalaman pengguna tetap sederhana, konsisten, dan mudah dipahami.

---

# First Time User

## Objective

Membantu pengguna mulai menggunakan Finance Copilot dengan cepat dan memahami nilai utama produk.

## Flow

Register
↓
Verify Email
↓
Login
↓
Create First Wallet
↓
Setup Preferences
↓
Create First Transaction
↓
View Dashboard

---

## User Actions

### Register Account

Pengguna membuat akun menggunakan:

* Nama
* Email
* Password

### Verify Email

Sistem mengirimkan email verifikasi.

### Login

Pengguna masuk ke dashboard.

### Create Wallet

Pengguna membuat sumber dana pertama.

Contoh:

* Cash
* BCA
* Mandiri
* Dana

### Configure Preferences

Pengguna menentukan:

* Currency
* Timezone
* Notification Preference

### Create First Transaction

Pengguna mencatat transaksi pertama.

### View Dashboard

Dashboard mulai menampilkan data keuangan pengguna.

---

# Daily User Flow

## Objective

Memastikan pengguna dapat mencatat aktivitas keuangan harian dengan cepat.

## Flow

User
↓
Input Transaction
↓
Transaction Validation
↓
Balance Update
↓
Analytics Update
↓
Dashboard Refresh

---

## Expected Outcome

Pengguna selalu memiliki data keuangan yang up-to-date.

---

# Wallet Setup Flow

## Objective

Mencatat seluruh sumber dana yang dimiliki pengguna.

## Flow

User
↓
Create Wallet
↓
Choose Wallet Type
↓
Set Initial Balance
↓
Save Wallet
↓
Dashboard Update

---

## Wallet Types

### Cash

Uang tunai.

### Bank

Rekening bank.

### E-Wallet

Dompet digital.

Contoh:

* Dana
* OVO
* GoPay
* ShopeePay

### Investment

Aset investasi.

---

## Example

BCA
Rp10.000.000

Dana
Rp500.000

Cash
Rp250.000

---

# Transaction Flow

## Objective

Mencatat seluruh aktivitas finansial pengguna.

## Supported Transaction Types

### Income

Pemasukan.

Contoh:

* Gaji
* Freelance
* Bonus

### Expense

Pengeluaran.

Contoh:

* Makan
* Transportasi
* Belanja

### Transfer

Perpindahan saldo antar wallet.

---

## Flow

User
↓
Create Transaction
↓
Choose Category
↓
Select Wallet
↓
Input Amount
↓
Save Transaction
↓
Update Wallet Balance
↓
Dashboard Update

---

# Telegram Flow

## Objective

Mempermudah pencatatan transaksi tanpa membuka aplikasi.

## Example Input

"Makan siang 25000"

"Gaji 5000000"

"Transfer Dana 100000"

---

## Flow

User
↓
Telegram Bot
↓
n8n Workflow
↓
AI Parsing
↓
Transaction Classification
↓
Laravel API
↓
Database
↓
Dashboard Update

---

## Result

Sistem otomatis:

* Mengenali transaksi
* Menentukan kategori
* Menentukan jenis transaksi
* Menyimpan transaksi

---

# OCR Flow

## Objective

Mengubah foto struk menjadi transaksi otomatis.

## Flow

User Upload Receipt
↓
OCR Engine
↓
Text Extraction
↓
AI Parsing
↓
Confidence Score
↓
Transaction Preview
↓
User Confirmation
↓
Create Transaction

---

## Business Rule

### Confidence Score < 70

User wajib melakukan review.

### Confidence Score ≥ 70

Sistem memberikan auto suggestion.

---

## Output

* Merchant Name
* Transaction Amount
* Transaction Date
* Suggested Category

---

# Budget Flow

## Objective

Membantu pengguna mengontrol pengeluaran.

## Flow

User Create Budget
↓
Select Category
↓
Set Monthly Limit
↓
Track Spending
↓
Calculate Usage
↓
Budget Alert
↓
Dashboard Update

---

## Example

Budget Makanan

Rp2.000.000

Current Usage

Rp1.700.000

Remaining

Rp300.000

---

## Threshold Notification

80% Budget Used
↓
Send Notification

100% Budget Used
↓
Critical Alert

---

# Goal Flow

## Objective

Membantu pengguna mencapai target finansial.

## Example Goals

* Laptop Baru
* Dana Darurat
* Liburan
* Rumah
* Kendaraan

---

## Flow

User Create Goal
↓
Set Target Amount
↓
Set Target Date
↓
Save Goal
↓
Add Contribution
↓
Progress Calculation
↓
Goal Forecast

---

## Example

Goal:

Laptop

Target

Rp15.000.000

Current

Rp8.000.000

Progress

53%

---

# Transfer Flow

## Objective

Mencatat perpindahan saldo antar wallet.

## Example

BCA
↓
Dana

Rp500.000

---

## Flow

User Create Transfer
↓
Select Source Wallet
↓
Select Destination Wallet
↓
Input Amount
↓
Save Transfer
↓
Reduce Source Balance
↓
Increase Destination Balance
↓
Create Transaction Record

---

## Result

Saldo kedua wallet selalu sinkron.

---

# Recurring Transaction Flow

## Objective

Mengotomatisasi transaksi yang berulang.

---

## Example Expense

Internet

Rp350.000

Monthly

---

## Example Income

Gaji

Rp8.000.000

Monthly

---

## Flow

User Create Recurring Transaction
↓
Set Frequency
↓
Scheduler Check
↓
Auto Generate Transaction
↓
Update Wallet Balance
↓
Update Next Schedule

---

## Supported Frequency

* Daily
* Weekly
* Monthly
* Yearly

---

# Emergency Fund Flow

## Objective

Membantu pengguna memantau kesiapan dana darurat.

## Flow

User Set Emergency Fund Target
↓
Track Current Fund
↓
Calculate Progress
↓
Forecast Recommendation
↓
Dashboard Update

---

## Example

Target

Rp30.000.000

Current

Rp12.000.000

Progress

40%

---

## AI Recommendation

"Untuk mencapai target dana darurat dalam 12 bulan, Anda perlu menabung Rp1.500.000 per bulan."

---

# Subscription Upgrade Flow

## Objective

Mengubah pengguna Free menjadi Pro User.

## Flow

Free User
↓
View Premium Feature
↓
Upgrade Prompt
↓
Choose Plan
↓
Payment
↓
Subscription Activation
↓
Access Premium Features

---

## Premium Features

* OCR Receipt
* Forecast Engine
* AI Executive Summary
* Financial Health Score
* Export PDF
* Export Excel
* Priority Support

---

# User Journey Success Criteria

User Journey dianggap berhasil apabila:

### First Week

* User membuat minimal 1 wallet.
* User mencatat minimal 5 transaksi.

### First Month

* User aktif menggunakan dashboard.
* User menggunakan budget atau goal.

### Long Term

* User menggunakan forecasting.
* User membaca AI Summary.
* User melakukan upgrade ke Pro Plan.

---

# User Journey Principles

Finance Copilot dirancang berdasarkan prinsip:

### Fast Input

Mencatat transaksi harus membutuhkan waktu kurang dari 10 detik.

### Clear Insight

Pengguna harus memahami kondisi keuangan tanpa membaca laporan yang kompleks.

### Actionable Recommendation

Setiap insight harus menghasilkan tindakan yang dapat dilakukan pengguna.

### Predictive Finance

Sistem tidak hanya menjelaskan masa lalu tetapi juga membantu memprediksi masa depan.
