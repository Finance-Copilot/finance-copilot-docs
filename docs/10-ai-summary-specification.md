# AI Executive Summary

## Overview

AI Executive Summary adalah fitur yang mengubah data keuangan kompleks menjadi ringkasan yang mudah dipahami oleh pengguna.

Tujuan utama fitur ini adalah membantu pengguna memahami kondisi keuangan mereka tanpa harus membaca grafik, tabel, atau laporan yang rumit.

AI akan menganalisis:

* Pola pemasukan
* Pola pengeluaran
* Budget
* Target keuangan
* Forecast
* Kondisi finansial secara keseluruhan

Kemudian menghasilkan insight dan rekomendasi yang dapat langsung ditindaklanjuti.

---

# Purpose

AI Executive Summary dirancang untuk menjawab pertanyaan berikut:

### Financial Overview

Bagaimana kondisi keuangan saya saat ini?

---

### Spending Behavior

Ke mana uang saya paling banyak digunakan?

---

### Financial Risk

Apakah ada risiko finansial yang perlu diperhatikan?

---

### Goal Progress

Apakah target keuangan saya berada pada jalur yang benar?

---

### Recommendation

Apa yang sebaiknya saya lakukan berikutnya?

---

### Financial Awareness

Bagaimana saya dapat memperbaiki kondisi keuangan saya?

---

# Monthly Summary

## Definition

Monthly Summary adalah ringkasan keuangan otomatis yang dihasilkan setiap akhir bulan.

Summary dibuat berdasarkan seluruh aktivitas finansial pengguna selama periode tersebut.

---

## Generation Schedule

Default:

```text id="w8c62j"
Setiap tanggal 1
pukul 01:00
```

---

## Trigger Sources

Summary akan dibuat setelah:

* Periode bulan selesai
* Forecast selesai dihitung
* Financial Health Score selesai dihitung

---

## Availability

Tersedia untuk:

```text id="5vsz35"
Pro User
```

---

# Input Sources

AI Executive Summary mengambil data dari berbagai modul dalam sistem.

---

## Income

### Data Used

* Total Income
* Income Growth
* Income Trend

### Purpose

Mengukur kestabilan pemasukan pengguna.

---

## Expense

### Data Used

* Total Expense
* Expense Growth
* Expense Categories
* Spending Trend

### Purpose

Mengidentifikasi pola pengeluaran.

---

## Wallet

### Data Used

* Current Balance
* Wallet Distribution
* Cash Position

### Purpose

Mengukur likuiditas pengguna.

---

## Budget

### Data Used

* Budget Usage
* Budget Overrun
* Budget Compliance

### Purpose

Mengukur disiplin penggunaan anggaran.

---

## Goals

### Data Used

* Goal Progress
* Goal Completion Rate
* Target Achievement Forecast

### Purpose

Mengukur kemajuan target finansial.

---

## Forecast

### Data Used

* Burn Rate
* Cash Runway
* Monthly Forecast
* Predicted Savings
* Spending Growth

### Purpose

Memberikan konteks kondisi keuangan di masa depan.

---

## Recurring Transactions

### Data Used

* Fixed Expense
* Fixed Income
* Upcoming Commitments

### Purpose

Mengidentifikasi kewajiban finansial yang akan datang.

---

# AI Output

AI menghasilkan beberapa bagian utama.

---

## Executive Summary

### Purpose

Memberikan ringkasan kondisi keuangan secara keseluruhan.

### Example

```text id="p7m3n0"
Pada bulan Juni 2026,
Anda memiliki kondisi keuangan yang relatif sehat.

Total pemasukan mencapai Rp8.000.000
dan total pengeluaran sebesar Rp5.200.000.

Cash flow positif sebesar Rp2.800.000
menunjukkan kemampuan menabung yang baik.
```

---

## Recommendations

### Purpose

Memberikan tindakan yang dapat dilakukan pengguna.

### Example

```text id="e7f4e9"
Pertimbangkan untuk meningkatkan
alokasi tabungan sebesar 10%.

Saat ini Anda memiliki cash flow positif
yang cukup untuk mempercepat pencapaian
target laptop baru.
```

---

## Potential Risks

### Purpose

Mengidentifikasi risiko finansial.

### Example

```text id="9zzl8x"
Pengeluaran kategori makanan meningkat
25% dibanding bulan sebelumnya.

Jika tren ini berlanjut,
budget bulanan berpotensi terlampaui.
```

---

## Savings Opportunity

### Purpose

Mengidentifikasi peluang penghematan.

### Example

```text id="l8m3dk"
Kategori hiburan menyumbang
15% dari total pengeluaran.

Mengurangi pengeluaran hiburan sebesar
20% dapat meningkatkan tabungan bulanan
hingga Rp300.000.
```

---

## Top Spending Categories

### Purpose

Menampilkan kategori pengeluaran terbesar.

### Example

```text id="w5mq9l"
1. Makanan
35%

2. Transportasi
20%

3. Hiburan
15%
```

---

# AI Prompt Structure

## Context Layer

AI menerima:

* User Financial Profile
* Monthly Financial Data
* Goal Information
* Budget Information
* Forecast Result

---

## Analysis Layer

AI melakukan:

* Trend Analysis
* Risk Analysis
* Budget Analysis
* Goal Analysis
* Forecast Interpretation

---

## Recommendation Layer

AI menghasilkan:

* Recommendations
* Warnings
* Opportunities

---

## Output Layer

AI menghasilkan:

* Summary
* Recommendations
* Risks
* Opportunities

---

# Sample Output

## Example 1

### Healthy Financial Condition

```text id="8i6f7t"
Keuangan Anda berada dalam kondisi baik.

Pemasukan bulan ini sebesar Rp8.000.000
dengan pengeluaran Rp5.000.000.

Cash flow positif Rp3.000.000 menunjukkan
kemampuan menabung yang sehat.

Dengan pola saat ini,
target pembelian laptop diperkirakan
tercapai dalam 7 bulan.
```

---

## Example 2

### Risk Condition

```text id="d8dz0h"
Pengeluaran Anda meningkat 22%
dibanding bulan sebelumnya.

Kategori makanan dan hiburan menjadi
penyumbang terbesar kenaikan tersebut.

Burn Rate saat ini menunjukkan bahwa
saldo hanya cukup untuk 45 hari.

Disarankan untuk mengurangi pengeluaran
non-prioritas dan meningkatkan dana darurat.
```

---

# AI Workflow

## Step 1

Collect Financial Data

Sources:

* Transactions
* Wallets
* Budgets
* Goals
* Forecast
* Financial Health Score

---

## Step 2

Prepare AI Context

Generate structured data:

```json id="o22qg0"
{
  "income": {},
  "expense": {},
  "budget": {},
  "goals": {},
  "forecast": {}
}
```

---

## Step 3

Prompt Construction

Build prompt berdasarkan:

* User Context
* Financial Metrics
* Forecast Result

---

## Step 4

OpenAI Processing

Generate:

* Summary
* Recommendations
* Risks
* Opportunities

---

## Step 5

Response Validation

Validate:

* Empty Response
* Hallucination Risk
* Token Length
* Formatting

---

## Step 6

Store Result

Save ke:

```text id="b9t2r7"
ai_summaries
```

untuk ditampilkan di Dashboard.

---

# AI Summary Quality Rules

Output harus:

### Easy to Understand

Bahasa sederhana dan non-teknis.

---

### Actionable

Harus memberikan tindakan yang jelas.

---

### Personalized

Berdasarkan data pengguna.

---

### Positive Tone

Memberikan motivasi tanpa menghakimi pengguna.

---

### Concise

Target:

```text id="m1v5dr"
150 - 300 kata
```

per summary.

---

# AI Refresh Strategy

## Automatic Generation

Monthly:

```text id="u4y0c9"
Tanggal 1
```

---

## Manual Generation

User dapat meminta regenerate summary kapan saja.

---

## Regeneration Trigger

* New Month
* Significant Financial Change
* User Request

---

# Subscription Rules

## Free User

Tidak memiliki akses ke AI Executive Summary.

---

## Pro User

Mendapatkan:

* Monthly Summary
* Recommendations
* Risk Analysis
* Savings Opportunity
* Goal Insight

---

# Future Enhancements

## Conversational Finance Assistant

Contoh:

```text id="v8kr3y"
Mengapa pengeluaran saya naik bulan ini?
```

---

```text id="9bq2s0"
Apa yang harus saya lakukan agar
target rumah tercapai lebih cepat?
```

---

## Personalized Financial Coach

AI memberikan saran proaktif berdasarkan perilaku pengguna.

---

## Scenario Analysis

Contoh:

```text id="7y3yec"
Bagaimana jika saya mengurangi
pengeluaran makanan 15%?
```

---

```text id="z6s7g2"
Bagaimana jika saya menambah
tabungan Rp1.000.000 per bulan?
```

---

## AI Financial Advisor

Fitur jangka panjang untuk memberikan rekomendasi keuangan yang lebih cerdas dan personal berdasarkan histori pengguna.
