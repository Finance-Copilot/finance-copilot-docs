# RBAC Design

## Overview

Role-Based Access Control (RBAC) digunakan untuk mengatur hak akses pengguna terhadap fitur dan data dalam Finance Copilot.

Tujuan utama RBAC adalah:

* Memastikan keamanan data pengguna.
* Membatasi akses berdasarkan paket langganan.
* Mempermudah pengelolaan permission.
* Mendukung implementasi Spatie Permission dan Filament Shield.

---

# Access Control Strategy

Finance Copilot menggunakan kombinasi:

### Role-Based Access

Menentukan akses berdasarkan role pengguna.

Contoh:

* Super Admin
* Pro User
* Free User

---

### Permission-Based Access

Menentukan tindakan yang boleh dilakukan oleh role tertentu.

Contoh:

* Create Transaction
* Update Transaction
* Delete Transaction
* Manage Users

---

### Subscription-Based Access

Menentukan fitur premium yang hanya tersedia untuk pengguna Pro.

Contoh:

* OCR Receipt
* Forecast Engine
* AI Executive Summary

---

# Roles

## Super Admin

### Description

Role dengan akses penuh terhadap seluruh sistem.

Digunakan untuk:

* System Administrator
* Product Owner
* Support Team

---

### Responsibilities

* Mengelola pengguna.
* Mengelola role dan permission.
* Mengelola subscription.
* Melihat seluruh data sistem.
* Mengelola konfigurasi aplikasi.

---

### Permissions

#### User Management

* View Users
* Create Users
* Update Users
* Delete Users

#### Role Management

* View Roles
* Create Roles
* Update Roles
* Delete Roles

#### Permission Management

* View Permissions
* Create Permissions
* Update Permissions
* Delete Permissions

#### Transaction Management

* View All Transactions
* Create Transaction
* Update Transaction
* Delete Transaction

#### Wallet Management

* Manage Wallets

#### Category Management

* Manage Categories

#### Budget Management

* Manage Budgets

#### Goal Management

* Manage Goals

#### Receipt Management

* Manage Receipts

#### Subscription Management

* Manage Subscriptions

#### System Configuration

* Manage Settings
* View System Logs

---

# Pro User

### Description

Pengguna berbayar yang memiliki akses ke seluruh fitur personal finance.

---

### Responsibilities

* Mengelola data keuangan pribadi.
* Menggunakan fitur AI.
* Menggunakan forecasting.
* Menggunakan OCR.

---

### Permissions

#### Wallet

* View Wallet
* Create Wallet
* Update Wallet
* Delete Wallet

#### Transaction

* View Own Transactions
* Create Transaction
* Update Own Transaction
* Delete Own Transaction

#### Categories

* View Categories
* Create Custom Categories
* Update Custom Categories

#### Budget

* Create Budget
* Update Budget
* Delete Budget

#### Goals

* Create Goal
* Update Goal
* Delete Goal

#### Recurring Transactions

* Create Recurring Transaction
* Update Recurring Transaction
* Delete Recurring Transaction

#### OCR

* Upload Receipt
* Process OCR
* Review OCR Result

#### Forecast

* View Forecast
* Generate Forecast

#### AI Summary

* Generate Executive Summary
* View Executive Summary

#### Reports

* Export PDF
* Export Excel

---

# Free User

### Description

Pengguna gratis dengan akses fitur dasar.

---

### Responsibilities

* Mencatat transaksi.
* Mengelola wallet.
* Melihat dashboard dasar.

---

### Permissions

#### Wallet

* View Wallet
* Create Wallet
* Update Wallet

#### Transaction

* View Own Transactions
* Create Transaction
* Update Own Transaction
* Delete Own Transaction

#### Categories

* View Categories
* Create Custom Categories

#### Dashboard

* View Dashboard

#### Analytics

* View Basic Analytics

#### Telegram

* Use Telegram Input

---

# Restrictions

Free User tidak memiliki akses ke fitur berikut:

### OCR

* Upload Receipt
* OCR Processing

---

### Forecast

* Burn Rate
* Cash Runway
* Monthly Forecast

---

### AI Executive Summary

* Monthly Summary
* AI Recommendation

---

### Export

* Export PDF
* Export Excel

---

### Advanced Analytics

* Financial Health Score
* Goal Achievement Forecast

---

# Permission Groups

Untuk mempermudah implementasi Spatie Permission, permission dikelompokkan berdasarkan modul.

---

## Users

* users.view
* users.create
* users.update
* users.delete

---

## Wallets

* wallets.view
* wallets.create
* wallets.update
* wallets.delete

---

## Categories

* categories.view
* categories.create
* categories.update
* categories.delete

---

## Transactions

* transactions.view
* transactions.create
* transactions.update
* transactions.delete

---

## Budgets

* budgets.view
* budgets.create
* budgets.update
* budgets.delete

---

## Goals

* goals.view
* goals.create
* goals.update
* goals.delete

---

## Receipts

* receipts.view
* receipts.create
* receipts.update
* receipts.delete

---

## Forecast

* forecast.view
* forecast.generate

---

## Executive Summary

* summaries.view
* summaries.generate

---

## Subscription

* subscriptions.view
* subscriptions.manage

---

## Settings

* settings.view
* settings.update

---

# Access Matrix

| Module                  | Free User | Pro User | Super Admin |
| ----------------------- | --------- | -------- | ----------- |
| Authentication          | ✅         | ✅        | ✅           |
| Wallet Management       | ✅         | ✅        | ✅           |
| Transaction Management  | ✅         | ✅        | ✅           |
| Transfer Management     | ✅         | ✅        | ✅           |
| Category Management     | ✅         | ✅        | ✅           |
| Dashboard               | ✅         | ✅        | ✅           |
| Basic Analytics         | ✅         | ✅        | ✅           |
| Budget Planning         | ✅         | ✅        | ✅           |
| Financial Goals         | ✅         | ✅        | ✅           |
| Emergency Fund          | ✅         | ✅        | ✅           |
| Recurring Transactions  | ❌         | ✅        | ✅           |
| Telegram Integration    | ✅         | ✅        | ✅           |
| OCR Receipt             | ❌         | ✅        | ✅           |
| Forecast Engine         | ❌         | ✅        | ✅           |
| AI Executive Summary    | ❌         | ✅        | ✅           |
| Financial Health Score  | ❌         | ✅        | ✅           |
| Export PDF              | ❌         | ✅        | ✅           |
| Export Excel            | ❌         | ✅        | ✅           |
| Subscription Management | ❌         | ❌        | ✅           |
| User Management         | ❌         | ❌        | ✅           |
| Role Management         | ❌         | ❌        | ✅           |
| Permission Management   | ❌         | ❌        | ✅           |
| System Settings         | ❌         | ❌        | ✅           |

---

# Data Ownership Rules

## Free User

Hanya dapat mengakses data miliknya sendiri.

---

## Pro User

Hanya dapat mengakses data miliknya sendiri.

---

## Super Admin

Dapat mengakses seluruh data sistem.

Digunakan untuk:

* Customer Support
* Monitoring
* System Administration

---

# Filament Shield Mapping

Role yang digunakan:

* Super Admin
* Pro User
* Free User

Permission akan di-generate menggunakan Filament Shield berdasarkan:

* Resources
* Pages
* Widgets

Contoh:

TransactionResource

akan menghasilkan:

* view_any_transaction
* view_transaction
* create_transaction
* update_transaction
* delete_transaction

---

# Authorization Principles

### Least Privilege

Pengguna hanya mendapatkan akses yang benar-benar dibutuhkan.

---

### Ownership First

Data pribadi hanya dapat diakses oleh pemilik data.

---

### Subscription Gated

Fitur premium dikontrol melalui subscription.

---

### Secure by Default

Semua endpoint dan resource harus memiliki authorization check sebelum dapat diakses.
