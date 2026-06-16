# API Design

## Overview

Finance Copilot menggunakan REST API sebagai standar komunikasi antar sistem.

API digunakan oleh:

* Filament Admin Panel
* Progressive Web App (PWA)
* Telegram Integration
* n8n Workflow
* OCR Service
* OpenAI Integration
* Future Mobile Application

Semua endpoint menggunakan JSON.

Base URL:

```http
/api/v1
```

Authentication:

```http
Bearer Token
```

---

# API Principles

## RESTful Design

Menggunakan resource-oriented endpoint.

Contoh:

```http
GET    /wallets
POST   /wallets
PUT    /wallets/{id}
DELETE /wallets/{id}
```

---

## Ownership First

Seluruh endpoint hanya dapat mengakses data milik user yang sedang login.

Contoh:

```http
GET /transactions/{id}
```

Harus memverifikasi:

```php
transaction.user_id === auth()->id()
```

---

## Async First

Proses berat tidak dijalankan secara realtime.

Contoh:

* OCR Processing
* Forecast Generation
* AI Summary Generation

dijalankan melalui Queue dan Scheduler.

---

# Standard Response

## Success Response

```json
{
  "success": true,
  "message": "Success",
  "data": {}
}
```

---

## Error Response

```json
{
  "success": false,
  "message": "Validation Error",
  "errors": {}
}
```

---

# Authentication API

## Register

```http
POST /auth/register
```

---

## Login

```http
POST /auth/login
```

Response:

```json
{
  "token": "sanctum_token"
}
```

---

## Logout

```http
POST /auth/logout
```

---

## Current User

```http
GET /auth/me
```

---

# Wallet API

## List Wallets

```http
GET /wallets
```

---

## Create Wallet

```http
POST /wallets
```

---

## Wallet Detail

```http
GET /wallets/{id}
```

---

## Update Wallet

```http
PUT /wallets/{id}
```

---

## Delete Wallet

```http
DELETE /wallets/{id}
```

---

# Category API

## List Categories

```http
GET /categories
```

---

## Create Category

```http
POST /categories
```

---

## Update Category

```http
PUT /categories/{id}
```

---

## Delete Category

```http
DELETE /categories/{id}
```

---

# Transaction API

## List Transactions

```http
GET /transactions
```

### Filters

```http
?wallet_id=
&category_id=
&type=
&source=
&start_date=
&end_date=
```

---

## Create Transaction

```http
POST /transactions
```

---

## Transaction Detail

```http
GET /transactions/{id}
```

---

## Update Transaction

```http
PUT /transactions/{id}
```

---

## Cancel Transaction

```http
PATCH /transactions/{id}/cancel
```

Karena transaksi menggunakan:

```text
draft
confirmed
cancelled
```

bukan hard delete.

---

# Transfer API

## Create Transfer

```http
POST /transfers
```

Responsibilities:

* Debit Source Wallet
* Credit Destination Wallet
* Create Transfer Transaction

---

# Receipt API

## Upload Receipt

```http
POST /receipts
```

Response:

```json
{
  "receipt_id": 1,
  "status": "processing"
}
```

OCR diproses secara asynchronous.

---

## Receipt Detail

```http
GET /receipts/{id}
```

---

## Confirm Receipt

```http
POST /receipts/{id}/confirm
```

Membuat transaksi berdasarkan hasil OCR.

---

# Budget API

## List Budgets

```http
GET /budgets
```

---

## Create Budget

```http
POST /budgets
```

---

## Update Budget

```http
PUT /budgets/{id}
```

---

## Delete Budget

```http
DELETE /budgets/{id}
```

---

## Budget Utilization

```http
GET /budgets/utilization
```

Menampilkan penggunaan budget per kategori.

---

# Financial Goal API

## List Goals

```http
GET /goals
```

---

## Create Goal

```http
POST /goals
```

---

## Goal Detail

```http
GET /goals/{id}
```

---

## Update Goal

```http
PUT /goals/{id}
```

---

## Goal Contribution

```http
POST /goals/{id}/contributions
```

---

## Goal Forecast

```http
GET /goals/{id}/forecast
```

Menampilkan estimasi pencapaian goal.

Source:

```text
Forecasts Table
```

---

# Recurring Transaction API

## List Recurring Transactions

```http
GET /recurring-transactions
```

---

## Create Recurring Transaction

```http
POST /recurring-transactions
```

---

## Update Recurring Transaction

```http
PUT /recurring-transactions/{id}
```

---

## Disable Recurring Transaction

```http
PATCH /recurring-transactions/{id}/disable
```

---

# Dashboard API

## Dashboard Summary

```http
GET /dashboard
```

Source:

* Wallets
* Transactions
* Budgets
* FinancialGoals
* FinancialHealthScores

---

## Dashboard Charts

```http
GET /dashboard/charts
```

Available:

* Income vs Expense
* Expense by Category
* Monthly Cash Flow
* Spending Trend
* Budget Utilization

---

## Dashboard Widgets

```http
GET /dashboard/widgets
```

Returns:

* Wallet Summary
* Goal Progress
* Budget Alerts
* Upcoming Recurring Transactions

---

# Forecast API

Forecast tidak dihitung saat endpoint dipanggil.

Forecast membaca data yang sudah tersedia pada tabel Forecasts.

---

## Current Forecast

```http
GET /forecast
```

Response:

```json
{
  "burn_rate": 85000,
  "cash_runway": 120,
  "predicted_expense": 5200000,
  "predicted_savings": 2300000
}
```

Source:

```text
Forecasts Table
```

---

## Goal Forecasts

```http
GET /forecast/goals
```

---

## Forecast History

```http
GET /forecast/history
```

---

# AI Summary API

AI Summary membaca cache yang telah dibuat oleh scheduler.

Tidak memanggil OpenAI secara realtime.

---

## Current Summary

```http
GET /ai-summary
```

Source:

```text
AiSummaries Table
```

---

## Monthly Summary

```http
GET /ai-summary/monthly
```

---

## AI Recommendations

```http
GET /ai-summary/recommendations
```

---

# Financial Health API

## Current Score

```http
GET /financial-health
```

Response:

```json
{
  "score": 82,
  "classification": "excellent"
}
```

---

## Score History

```http
GET /financial-health/history
```

---

# Notification API

Menggunakan Laravel Notifications.

---

## List Notifications

```http
GET /notifications
```

---

## Mark As Read

```http
PATCH /notifications/{id}/read
```

---

## Mark All As Read

```http
PATCH /notifications/read-all
```

---

# Webhook API

## Telegram Webhook

```http
POST /webhooks/telegram
```

Purpose:

Receive transaction messages from Telegram Bot.

---

## OCR Callback

```http
POST /webhooks/ocr
```

Purpose:

Receive OCR extraction result.

---

# Subscription API

## Available Plans

```http
GET /subscriptions/plans
```

---

## Current Subscription

```http
GET /subscriptions/current
```

---

## Upgrade Subscription

```http
POST /subscriptions/upgrade
```

---

# API Security

## Authentication

* Laravel Sanctum
* Bearer Token

---

## Authorization

* Laravel Policies
* Spatie Permission

---

## Rate Limiting

Default:

```http
60 requests / minute
```

Sensitive Endpoint:

```http
POST /auth/login
```

```http
10 requests / minute
```

---

# API Versioning

Current Version:

```http
/api/v1/*
```

Examples:

```http
/api/v1/transactions
/api/v1/dashboard
/api/v1/forecast
/api/v1/ai-summary
```

Future:

```http
/api/v2/*
```
