# Forecast Specification

## Overview

Forecast Engine adalah komponen analitik yang digunakan untuk memprediksi kondisi keuangan pengguna berdasarkan data historis dan perilaku finansial saat ini.

Tujuan utama Forecast Engine adalah membantu pengguna memahami kondisi keuangan di masa depan dan mengambil keputusan finansial yang lebih baik.

Forecast Engine digunakan oleh:

* Dashboard
* Financial Health Score
* Goal Tracking
* AI Executive Summary
* Recommendation Engine

---

# Purpose

Forecast Engine dirancang untuk menjawab pertanyaan berikut:

### Spending Forecast

Berapa kemungkinan pengeluaran bulan depan?

---

### Financial Stability

Berapa lama saldo saat ini dapat bertahan?

---

### Saving Projection

Berapa jumlah tabungan yang dapat dicapai jika pola saat ini dipertahankan?

---

### Goal Achievement

Apakah target finansial dapat tercapai tepat waktu?

---

### Risk Detection

Apakah pengguna memiliki risiko kehabisan saldo atau gagal mencapai target keuangan?

---

# Forecast Inputs

Forecast Engine menggunakan beberapa sumber data untuk menghasilkan prediksi.

---

## Transactions

### Purpose

Sumber utama perilaku keuangan pengguna.

### Data Used

* Income
* Expense
* Transfer
* Transaction Date
* Transaction Category

### Example

```text id="dwsv5d"
Januari
Expense = Rp4.500.000

Februari
Expense = Rp4.800.000

Maret
Expense = Rp5.200.000
```

---

## Budget

### Purpose

Menentukan batas pengeluaran yang direncanakan pengguna.

### Data Used

* Budget Amount
* Budget Category
* Budget Usage

### Impact

Digunakan untuk mengukur disiplin pengeluaran.

---

## Goals

### Purpose

Mengukur kemampuan pengguna mencapai target finansial.

### Data Used

* Target Amount
* Current Amount
* Target Date

### Impact

Digunakan untuk Goal Achievement Forecast.

---

## Recurring Transactions

### Purpose

Memperhitungkan transaksi rutin yang akan terjadi.

### Data Used

* Amount
* Frequency
* Next Run Date

### Example

```text id="xy2n4n"
Internet
Rp350.000

Monthly
```

---

## Wallet Balance

### Purpose

Menentukan kondisi keuangan saat ini.

### Data Used

* Total Wallet Balance
* Active Wallets

### Impact

Digunakan untuk Cash Runway Calculation.

---

# Burn Rate

## Definition

Burn Rate adalah rata-rata pengeluaran harian pengguna.

Burn Rate digunakan untuk mengetahui kecepatan pengguna menghabiskan uang.

---

## Formula

```text id="1c6lhx"
Burn Rate =
Total Expense
÷
Number of Days
```

---

## Example

Total Expense

```text id="ymmb7u"
Rp2.550.000
```

Periode

```text id="3wjlwm"
30 hari
```

Burn Rate

```text id="nnq4xg"
Rp85.000 / hari
```

---

## Usage

Digunakan oleh:

* Cash Runway
* Risk Analysis
* Financial Health Score

---

# Cash Runway

## Definition

Cash Runway adalah estimasi berapa lama saldo pengguna dapat bertahan jika pola pengeluaran saat ini tidak berubah.

---

## Formula

```text id="vgo6bo"
Cash Runway =
Current Balance
÷
Burn Rate
```

---

## Example

Current Balance

```text id="7cwbxy"
Rp10.200.000
```

Burn Rate

```text id="z64wcr"
Rp85.000
```

Cash Runway

```text id="v2qq9d"
120 Hari
```

---

## Classification

| Range        | Status   |
| ------------ | -------- |
| < 30 Hari    | Critical |
| 30 - 90 Hari | Warning  |
| > 90 Hari    | Healthy  |

---

# Monthly Forecast

## Definition

Prediksi pengeluaran bulan berikutnya berdasarkan pola historis.

---

## Formula

Versi MVP menggunakan moving average.

```text id="w0yzdg"
Average Last 3 Months Expense
```

---

## Example

```text id="m4q0d2"
Januari = Rp4.500.000

Februari = Rp4.800.000

Maret = Rp5.200.000
```

Forecast

```text id="8xst50"
Rp4.833.333
```

---

## Future Enhancement

Versi berikutnya dapat menggunakan:

* Weighted Moving Average
* Regression Model
* Machine Learning Model

---

# Spending Growth

## Definition

Mengukur pertumbuhan atau penurunan pengeluaran.

---

## Formula

```text id="0g2ufl"
(Current Month Expense
-
Previous Month Expense)

÷

Previous Month Expense
```

---

## Example

Previous Month

```text id="4d8m0z"
Rp4.000.000
```

Current Month

```text id="4lk78m"
Rp5.000.000
```

Growth

```text id="76u8xt"
25%
```

---

## Classification

| Growth   | Status          |
| -------- | --------------- |
| < 0%     | Improving       |
| 0% - 10% | Stable          |
| > 10%    | Increasing Risk |

---

# Goal Achievement Forecast

## Definition

Memperkirakan kapan target finansial akan tercapai.

---

## Required Inputs

* Target Amount
* Current Amount
* Average Monthly Saving

---

## Formula

Remaining Amount

```text id="ww2mza"
Target Amount
-
Current Amount
```

Months Required

```text id="sx1m9k"
Remaining Amount
÷
Average Monthly Saving
```

---

## Example

Target

```text id="lwmf60"
Rp15.000.000
```

Current

```text id="9bajzq"
Rp8.000.000
```

Remaining

```text id="ikq6ln"
Rp7.000.000
```

Monthly Saving

```text id="3z95ww"
Rp1.000.000
```

Forecast

```text id="avvfkr"
7 Bulan
```

---

## Output

```text id="iw4eqn"
Estimated Achievement Date
```

---

# Predicted Savings

## Definition

Prediksi jumlah tabungan yang dapat dicapai berdasarkan pola pemasukan dan pengeluaran saat ini.

---

## Formula

```text id="3p5w6m"
Predicted Savings
=
Expected Income
-
Expected Expense
```

---

## Example

Income

```text id="u5hsmr"
Rp8.000.000
```

Expense

```text id="3qlz3u"
Rp5.000.000
```

Result

```text id="s6xvwy"
Rp3.000.000
```

---

# Forecast Output

Forecast Engine menghasilkan objek data yang digunakan oleh Dashboard dan AI.

---

## Predicted Expense

Prediksi total pengeluaran bulan berikutnya.

---

## Predicted Savings

Prediksi jumlah tabungan bulan berikutnya.

---

## Goal Achievement Date

Perkiraan tanggal target finansial tercapai.

---

## Cash Runway

Estimasi daya tahan saldo saat ini.

---

## Burn Rate

Rata-rata pengeluaran harian.

---

## Spending Growth

Persentase pertumbuhan pengeluaran.

---

# Forecast Engine Workflow

## Step 1

Collect Data

Sources:

* Transactions
* Wallets
* Budgets
* Goals
* Recurring Transactions

---

## Step 2

Data Aggregation

Calculate:

* Total Income
* Total Expense
* Monthly Saving
* Budget Usage

---

## Step 3

Forecast Calculation

Calculate:

* Burn Rate
* Cash Runway
* Monthly Forecast
* Goal Forecast
* Predicted Savings

---

## Step 4

Risk Evaluation

Detect:

* High Spending
* Budget Overrun
* Negative Cash Flow
* Goal Delay Risk

---

## Step 5

Generate Forecast Result

Store result for:

* Dashboard
* Financial Health Score
* Executive Summary

---

# Forecast Refresh Strategy

## Real-Time Trigger

Recalculate setelah:

* Create Transaction
* Update Transaction
* Delete Transaction
* Transfer Transaction

---

## Scheduled Recalculation

Forecast Scheduler

```text id="rwzypq"
Daily
```

Waktu:

```text id="e2vzuh"
00:30
```

---

# Forecast Accuracy

## Target Accuracy

Minimal:

```text id="r9hygt"
80%
```

untuk Monthly Expense Prediction.

---

## Accuracy Formula

```text id="5v5wte"
100%

-

(
Actual
-
Forecast
)

÷

Actual
```

---

# Future Enhancements

## Advanced Forecast

Menggunakan:

* Weighted Moving Average
* Trend Analysis
* Seasonal Analysis

---

## AI Forecast

Menggunakan OpenAI untuk:

* Spending Behavior Prediction
* Risk Prediction
* Personalized Recommendation

---

## Scenario Simulation

Pengguna dapat melakukan simulasi.

Contoh:

```text id="uyyk29"
Jika saya mengurangi
pengeluaran makan 20%

apa yang terjadi?
```

atau

```text id="gw4z8z"
Jika saya menabung
Rp2.000.000 per bulan

kapan target rumah tercapai?
```

Fitur ini direncanakan untuk versi setelah MVP.
