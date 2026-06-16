# Dashboard Specification

## Overview

Dashboard merupakan halaman utama Finance Copilot yang berfungsi sebagai pusat informasi keuangan pengguna.

Dashboard dirancang untuk memberikan gambaran kondisi finansial saat ini, membantu pengguna memahami pola pengeluaran, memantau target keuangan, serta menampilkan insight dan prediksi yang dapat digunakan untuk mengambil keputusan finansial yang lebih baik.

Dashboard harus mampu menjawab kondisi keuangan pengguna dalam waktu kurang dari 30 detik setelah dibuka.

---

# Dashboard Objectives

## Financial Visibility

Menampilkan kondisi keuangan secara menyeluruh dalam satu halaman.

Meliputi:

* Total Saldo
* Pemasukan
* Pengeluaran
* Cash Flow

---

## Spending Awareness

Membantu pengguna memahami:

* Ke mana uang digunakan
* Kategori pengeluaran terbesar
* Tren pengeluaran

---

## Financial Planning

Membantu pengguna memantau:

* Budget
* Financial Goals
* Goal Progress

---

## Financial Forecasting

Memberikan prediksi kondisi finansial di masa depan berdasarkan data historis.

---

## AI Driven Insights

Memberikan ringkasan dan rekomendasi otomatis yang mudah dipahami.

---

# Dashboard Layout

## Section 1

KPI Cards

---

## Section 2

Financial Charts

---

## Section 3

Planning Widgets

---

## Section 4

Forecast Widgets

---

## Section 5

AI Insights

---

# KPI Cards

KPI Cards merupakan indikator utama yang ditampilkan pada bagian paling atas dashboard.

---

## Current Balance

### Purpose

Menampilkan total saldo seluruh wallet aktif.

### Formula

```text
SUM(wallet.current_balance)
```

### Data Source

Wallets

---

## Income

### Purpose

Menampilkan total pemasukan pada periode yang dipilih.

### Formula

```text
SUM(transactions.amount)

WHERE type = income
```

### Data Source

Transactions

---

## Expense

### Purpose

Menampilkan total pengeluaran pada periode yang dipilih.

### Formula

```text
SUM(transactions.amount)

WHERE type = expense
```

### Data Source

Transactions

---

## Cash Flow

### Purpose

Menampilkan selisih antara pemasukan dan pengeluaran.

### Formula

```text
Income - Expense
```

### Data Source

Transactions

---

## Budget Usage

### Purpose

Menampilkan persentase penggunaan budget bulan berjalan.

### Formula

```text
Current Expense
÷
Budget Amount
```

### Data Source

Budgets

Transactions

---

## Goal Progress

### Purpose

Menampilkan progres rata-rata seluruh financial goals aktif.

### Formula

```text
Current Amount
÷
Target Amount
```

### Data Source

FinancialGoals

---

## Financial Health Score

### Purpose

Menampilkan skor kesehatan finansial pengguna.

### Range

```text
0 - 100
```

### Classification

```text
Poor
Fair
Good
Excellent
```

### Data Source

FinancialHealthScores

---

# Dashboard Widgets

## Wallet Summary

### Purpose

Menampilkan saldo seluruh wallet.

### Data Source

Wallets

### Example

```text
BCA
Rp 10.000.000

Dana
Rp 1.500.000

Cash
Rp 500.000
```

---

## Goal Progress Widget

### Purpose

Menampilkan seluruh target finansial aktif.

### Data Source

FinancialGoals

### Example

```text
Emergency Fund
40%

Laptop
53%

Vacation
72%
```

---

## Upcoming Recurring Transactions

### Purpose

Menampilkan transaksi otomatis yang akan berjalan.

### Data Source

RecurringTransactions

### Example

```text
Internet
5 Juli

Netflix
7 Juli

Gaji
25 Juli
```

---

## Budget Alert Widget

### Purpose

Menampilkan kategori yang mendekati atau melebihi budget.

### Data Source

Budgets

Transactions

### Example

```text
Food
92%

Entertainment
88%

Transportation
85%
```

---

# Financial Charts

## Income vs Expense

### Chart Type

Line Chart

### Purpose

Membandingkan pemasukan dan pengeluaran dari waktu ke waktu.

### Data Source

Transactions

---

## Expense by Category

### Chart Type

Pie Chart

### Purpose

Menampilkan distribusi pengeluaran berdasarkan kategori.

### Data Source

Transactions

---

## Monthly Cash Flow

### Chart Type

Bar Chart

### Purpose

Menampilkan surplus atau defisit keuangan bulanan.

### Formula

```text
Income - Expense
```

### Data Source

Transactions

---

## Spending Trend

### Chart Type

Area Chart

### Purpose

Melihat tren perubahan pengeluaran.

### Data Source

Transactions

---

## Budget Utilization

### Chart Type

Progress Chart

### Purpose

Menampilkan penggunaan budget per kategori.

### Data Source

Budgets

Transactions

### Example

```text
Food
85%

Transportation
45%

Entertainment
60%
```

---

# Forecast Section

Forecast menggunakan data yang telah dihitung dan disimpan pada tabel Forecasts.

Forecast tidak dihitung secara realtime saat dashboard dibuka.

---

## Forecast Widget

### Purpose

Menampilkan ringkasan prediksi kondisi finansial.

### Data Source

Forecasts

### Metrics

* Burn Rate
* Cash Runway
* Forecast Expense
* Predicted Savings

### Example

```text
Burn Rate
Rp85.000 / hari

Cash Runway
120 Hari

Forecast Expense
Rp5.200.000

Predicted Savings
Rp2.300.000
```

---

## Goal Forecast Widget

### Purpose

Menampilkan prediksi pencapaian target finansial.

### Data Source

Forecasts.goal_achievement

### Example

```text
Laptop

53%

Estimated Completion

Februari 2027
```

---

# AI Insights Section

AI Insights menggunakan hasil yang telah disimpan pada tabel AiSummaries.

AI tidak dijalankan saat dashboard dibuka.

---

## AI Executive Summary Widget

### Purpose

Menampilkan ringkasan kondisi finansial dalam bahasa yang mudah dipahami.

### Data Source

AiSummaries

### Example

```text
Pengeluaran terbesar bulan ini
berasal dari kategori makanan
sebesar 35%.

Dengan pola saat ini,
saldo diperkirakan aman
hingga 120 hari.

Disarankan mengurangi
pengeluaran hiburan sebesar
10% untuk mempercepat
target dana darurat.
```

---

## AI Recommendations Widget

### Purpose

Menampilkan rekomendasi tindakan yang dapat dilakukan pengguna.

### Data Source

AiSummaries

### Example

```text
Kurangi pengeluaran makanan
sebanyak Rp500.000 per bulan.

Tambahkan kontribusi dana
darurat sebesar Rp300.000
per bulan.
```

---

# Dashboard Data Sources

| Component        | Source                                                                |
| ---------------- | --------------------------------------------------------------------- |
| KPI Cards        | Wallets, Transactions, Budgets, FinancialGoals, FinancialHealthScores |
| Wallet Widget    | Wallets                                                               |
| Goal Widget      | FinancialGoals                                                        |
| Budget Widget    | Budgets, Transactions                                                 |
| Charts           | Transactions                                                          |
| Forecast Widgets | Forecasts                                                             |
| AI Widgets       | AiSummaries                                                           |

---

# Filters

Semua widget dan chart wajib menggunakan filter yang sama agar data tetap konsisten.

---

## Date Filter

### Options

```text
Today
Yesterday
This Week
Last Week
This Month
Last Month
This Year
```

---

## Category Filter

### Purpose

Memfilter data berdasarkan kategori.

---

## Transaction Type Filter

### Options

```text
Income
Expense
Transfer
```

---

## Wallet Filter

### Purpose

Memfilter data berdasarkan wallet tertentu.

---

## Custom Range

### Input

```text
Start Date

End Date
```

---

# Dashboard Refresh Strategy

## Real Time Refresh

Dashboard diperbarui ketika:

* Create Transaction
* Update Transaction
* Confirm OCR Transaction
* Transfer Wallet
* Goal Contribution

---

## Scheduled Refresh

### Forecast

```text
Daily
00:30
```

Source:

```text
ForecastService
→ Forecasts Table
```

---

### Financial Health Score

```text
Daily
00:30
```

Source:

```text
FinancialHealthService
→ FinancialHealthScores Table
```

---

### AI Executive Summary

```text
Monthly
01:00
Tanggal 1
```

Source:

```text
ExecutiveSummaryService
→ AiSummaries Table
```

---

# Dashboard Success Criteria

Dashboard dianggap berhasil apabila pengguna dapat menjawab pertanyaan berikut tanpa membuka halaman lain:

* Berapa total saldo saya?
* Berapa pemasukan dan pengeluaran saya bulan ini?
* Kategori pengeluaran terbesar saya apa?
* Apakah budget saya masih aman?
* Apakah target finansial saya sesuai rencana?
* Berapa lama saldo saya akan bertahan?
* Bagaimana kondisi kesehatan finansial saya?
* Apa rekomendasi terbaik yang harus saya lakukan saat ini?

Dashboard harus menjadi pusat pengambilan keputusan finansial bagi pengguna Finance Copilot.
