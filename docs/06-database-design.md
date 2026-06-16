---
id: 06-database-design
title: Database Design
sidebar_position: 6
---

# Database Design

## Overview

Dokumen ini menjelaskan struktur database Finance Copilot yang digunakan untuk menyimpan data pengguna, transaksi keuangan, budget, forecasting, AI summary, dan seluruh fitur pendukung lainnya.

Database menggunakan PostgreSQL sebagai primary database dan dirancang mengikuti prinsip:

* Normalized Data Structure
* Clear Ownership
* Auditability
* Scalability
* Financial Data Consistency

---

# Database Principles

## User Ownership

Seluruh data finansial wajib dimiliki oleh satu user.

Contoh:

* Wallet
* Transaction
* Budget
* Goal
* Receipt
* Forecast

---

## Immutable Financial Records

Transaksi yang sudah dikonfirmasi tidak boleh dihapus secara permanen.

Menggunakan:

```text
draft
confirmed
cancelled
```

dan Soft Delete.

---

## Source Tracking

Setiap transaksi wajib memiliki sumber.

```text
manual
telegram
ocr
recurring
```

---

## Financial Consistency

Seluruh operasi finansial wajib menggunakan database transaction.

Contoh:

* Transfer Wallet
* Goal Contribution
* OCR Confirmation

---

# Entity Overview

## Core Entities

* Users
* UserSettings
* Subscriptions

## Financial Entities

* Wallets
* Categories
* Transactions
* Receipts

## Planning Entities

* Budgets
* RecurringTransactions
* FinancialGoals
* GoalContributions

## Analytics Entities

* Forecasts
* AiSummaries
* FinancialHealthScores

---

# Users

Root entity seluruh data.

| Field             | Type         |
| ----------------- | ------------ |
| id                | BIGSERIAL    |
| name              | VARCHAR(255) |
| email             | VARCHAR(255) |
| password          | VARCHAR(255) |
| telegram_chat_id  | VARCHAR(100) |
| email_verified_at | TIMESTAMP    |
| created_at        | TIMESTAMP    |
| updated_at        | TIMESTAMP    |

---

# User Settings

Preferensi aplikasi pengguna.

| Field                         | Type        |
| ----------------------------- | ----------- |
| id                            | BIGSERIAL   |
| user_id                       | BIGINT      |
| currency                      | VARCHAR(10) |
| timezone                      | VARCHAR(50) |
| week_start_day                | VARCHAR(20) |
| budget_alert_enabled          | BOOLEAN     |
| telegram_notification_enabled | BOOLEAN     |
| monthly_summary_enabled       | BOOLEAN     |

---

# Subscriptions

Manajemen paket berlangganan.

| Field      | Type        |
| ---------- | ----------- |
| id         | BIGSERIAL   |
| user_id    | BIGINT      |
| plan       | VARCHAR(20) |
| status     | VARCHAR(20) |
| start_date | DATE        |
| end_date   | DATE        |

### Plan

```text
free
pro
```

### Status

```text
pending
active
expired
cancelled
```

---

# Wallets

Sumber dana pengguna.

| Field           | Type          |
| --------------- | ------------- |
| id              | BIGSERIAL     |
| user_id         | BIGINT        |
| name            | VARCHAR(100)  |
| type            | VARCHAR(20)   |
| initial_balance | NUMERIC(15,2) |
| current_balance | NUMERIC(15,2) |
| is_active       | BOOLEAN       |

### Wallet Types

```text
cash
bank
ewallet
investment
```

---

# Categories

Kategori transaksi.

| Field      | Type         |
| ---------- | ------------ |
| id         | BIGSERIAL    |
| user_id    | BIGINT NULL  |
| name       | VARCHAR(100) |
| type       | VARCHAR(20)  |
| icon       | VARCHAR(100) |
| color      | VARCHAR(20)  |
| is_default | BOOLEAN      |

### Category Types

```text
income
expense
```

Keterangan:

* user_id NULL = kategori sistem
* user_id terisi = kategori milik user

---

# Transactions

Entity utama sistem.

| Field            | Type          |
| ---------------- | ------------- |
| id               | BIGSERIAL     |
| user_id          | BIGINT        |
| wallet_id        | BIGINT        |
| category_id      | BIGINT        |
| from_wallet_id   | BIGINT NULL   |
| to_wallet_id     | BIGINT NULL   |
| receipt_id       | BIGINT NULL   |
| reference_no     | VARCHAR(100)  |
| type             | VARCHAR(20)   |
| status           | VARCHAR(20)   |
| source           | VARCHAR(20)   |
| amount           | NUMERIC(15,2) |
| description      | TEXT          |
| metadata         | JSONB         |
| transaction_date | DATE          |
| created_at       | TIMESTAMP     |

### Transaction Types

```text
income
expense
transfer
```

### Transaction Status

```text
draft
confirmed
cancelled
```

### Transaction Source

```text
manual
telegram
ocr
recurring
```

---

# Receipts

Data hasil OCR.

| Field            | Type         |
| ---------------- | ------------ |
| id               | BIGSERIAL    |
| user_id          | BIGINT       |
| image_path       | TEXT         |
| ocr_text         | TEXT         |
| ai_result        | JSONB        |
| confidence_score | NUMERIC(5,2) |
| processed_at     | TIMESTAMP    |

---

# Budgets

Budget bulanan per kategori.

| Field       | Type          |
| ----------- | ------------- |
| id          | BIGSERIAL     |
| user_id     | BIGINT        |
| category_id | BIGINT        |
| amount      | NUMERIC(15,2) |
| month       | INTEGER       |
| year        | INTEGER       |

---

# Recurring Transactions

Transaksi otomatis.

| Field         | Type          |
| ------------- | ------------- |
| id            | BIGSERIAL     |
| user_id       | BIGINT        |
| wallet_id     | BIGINT        |
| category_id   | BIGINT        |
| type          | VARCHAR(20)   |
| amount        | NUMERIC(15,2) |
| frequency     | VARCHAR(20)   |
| next_run_date | DATE          |
| is_active     | BOOLEAN       |

### Frequency

```text
daily
weekly
monthly
yearly
```

---

# Financial Goals

Target finansial pengguna.

| Field          | Type          |
| -------------- | ------------- |
| id             | BIGSERIAL     |
| user_id        | BIGINT        |
| wallet_id      | BIGINT NULL   |
| goal_type      | VARCHAR(50)   |
| name           | VARCHAR(255)  |
| target_amount  | NUMERIC(15,2) |
| current_amount | NUMERIC(15,2) |
| target_date    | DATE          |
| status         | VARCHAR(20)   |

### Goal Types

```text
savings
emergency_fund
vacation
house
vehicle
investment
```

### Status

```text
active
completed
cancelled
```

---

# Goal Contributions

Riwayat kontribusi goal.

| Field             | Type          |
| ----------------- | ------------- |
| id                | BIGSERIAL     |
| goal_id           | BIGINT        |
| transaction_id    | BIGINT        |
| amount            | NUMERIC(15,2) |
| contribution_date | DATE          |

---

# Forecasts

Cache hasil forecast.

| Field             | Type          |
| ----------------- | ------------- |
| id                | BIGSERIAL     |
| user_id           | BIGINT        |
| month             | INTEGER       |
| year              | INTEGER       |
| burn_rate         | NUMERIC(15,2) |
| cash_runway       | INTEGER       |
| predicted_expense | NUMERIC(15,2) |
| predicted_savings | NUMERIC(15,2) |
| goal_achievement  | JSONB         |
| generated_at      | TIMESTAMP     |

---

# AI Summaries

Cache hasil AI Executive Summary.

| Field        | Type      |
| ------------ | --------- |
| id           | BIGSERIAL |
| user_id      | BIGINT    |
| month        | INTEGER   |
| year         | INTEGER   |
| result       | JSONB     |
| generated_at | TIMESTAMP |

Contoh:

```json
{
  "summary": "...",
  "recommendations": [],
  "risks": [],
  "opportunities": []
}
```

---

# Financial Health Scores

Skor kesehatan finansial.

| Field          | Type        |
| -------------- | ----------- |
| id             | BIGSERIAL   |
| user_id        | BIGINT      |
| score          | INTEGER     |
| classification | VARCHAR(20) |
| month          | INTEGER     |
| year           | INTEGER     |

### Classification

```text
poor
fair
good
excellent
```

---

# Relationships

User

├── UserSettings

├── Subscriptions

├── Wallets

├── Transactions

├── Receipts

├── Budgets

├── FinancialGoals

├── Forecasts

├── AiSummaries

└── FinancialHealthScores

Wallet

└── Transactions

Category

├── Transactions

├── Budgets

└── RecurringTransactions

FinancialGoal

└── GoalContributions

Receipt

└── Transactions

---

# Business Rules

## OCR Confidence

```text
confidence_score < 70
```

Manual review required.

```text
confidence_score >= 70
```

Auto suggestion allowed.

---

## Wallet Transfer

Transfer harus:

* Debit wallet asal
* Credit wallet tujuan
* Membuat transaction type transfer

dalam satu database transaction.

---

## Goal Tracking

Goal otomatis completed jika:

```text
current_amount >= target_amount
```

---

## Emergency Fund Goal

Goal Type:

```text
emergency_fund
```

Target rekomendasi:

```text
3x - 6x Monthly Expense
```

---

## Forecast Generation

Forecast dihitung melalui scheduler.

```text
Daily
00:30
```

Hasil disimpan ke tabel:

```text
forecasts
```

---

# Indexing Strategy

```sql
transactions(user_id)

transactions(transaction_date)

transactions(category_id)

transactions(wallet_id)

transactions(source)

budgets(user_id, month, year)

financial_goals(user_id)

forecasts(user_id, month, year)

receipts(user_id)

receipts(confidence_score)
```

---

# Future Tables

Versi berikutnya:

* bank_accounts
* investment_portfolios
* exchange_rates
* family_accounts
* shared_wallets
* ai_recommendations
