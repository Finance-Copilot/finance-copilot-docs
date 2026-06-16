# Non Functional Requirement

## Overview

Dokumen ini mendefinisikan kebutuhan non-fungsional Finance Copilot yang harus dipenuhi agar sistem dapat berjalan dengan aman, stabil, cepat, dan dapat diskalakan.

Non Functional Requirement (NFR) berlaku untuk seluruh modul:

* Authentication
* Wallet
* Transaction
* Budget
* Goals
* OCR
* Forecast
* AI Summary
* Dashboard
* API

Tujuan utama dokumen ini adalah memastikan kualitas sistem tetap terjaga seiring bertambahnya pengguna dan kompleksitas fitur.

---

# Performance

## Objective

Menjamin aplikasi tetap responsif dalam penggunaan sehari-hari.

---

## Dashboard Performance

Target:

```text
Dashboard Load Time
< 2 Seconds
```

KPI yang dihitung:

* Current Balance
* Income
* Expense
* Cash Flow
* Budget Usage

harus menggunakan query yang teroptimasi.

---

## Transaction Processing

Target:

```text
Create Transaction
< 1 Second
```

Mencakup:

* Validation
* Database Save
* Wallet Update

---

## API Performance

Target:

```text
Average API Response
< 500 ms
```

Untuk endpoint:

* Wallet
* Transaction
* Category
* Budget
* Goal

---

## OCR Performance

Target:

```text
OCR Processing
< 10 Seconds
```

Karena berjalan secara asynchronous.

---

## AI Summary Performance

Target:

```text
AI Summary Generation
< 30 Seconds
```

Dilakukan melalui queue.

---

## Forecast Performance

Target:

```text
Forecast Calculation
< 5 Seconds
```

Untuk dataset pengguna normal.

---

# Availability

## Objective

Menjamin aplikasi dapat diakses secara konsisten.

---

## System Availability

Target SLA:

```text
99.5%
```

Maksimum downtime:

```text
≈ 3.6 Jam / Bulan
```

---

## Scheduled Maintenance

Dilakukan:

```text
Minggu
01:00 - 03:00 WIB
```

Jika diperlukan.

---

## Graceful Degradation

Jika OCR atau OpenAI gagal:

* Dashboard tetap berjalan.
* Transaction tetap dapat dibuat.
* Fitur premium yang gagal tidak mempengaruhi fitur utama.

---

# Security

## Objective

Melindungi data finansial pengguna.

---

## Authentication

Menggunakan:

* Laravel Sanctum
* Email Verification
* Secure Session Management

---

## Authorization

Menggunakan:

* RBAC
* Spatie Permission
* Laravel Policies

Prinsip:

```text
Ownership First
```

User hanya dapat mengakses data miliknya sendiri.

---

## Password Security

Standar:

```text
bcrypt / argon2id
```

Password tidak pernah disimpan dalam bentuk plaintext.

---

## CSRF Protection

Seluruh web request harus dilindungi oleh:

```text
CSRF Token
```

---

## Rate Limiting

Default:

```text
60 Request / Menit
```

Sensitive Endpoint:

```text
Login
10 Request / Menit
```

---

## API Security

Semua endpoint:

```text
/api/*
```

wajib menggunakan:

```text
Bearer Token
```

---

## File Upload Security

Receipt Upload:

* JPG
* PNG
* WEBP

Maksimum:

```text
5 MB
```

---

## Sensitive Data Protection

Data berikut dianggap sensitif:

* Email
* Telegram Chat ID
* Financial Data
* Subscription Data

Tidak boleh dicatat ke application log.

---

# Scalability

## Objective

Mendukung pertumbuhan pengguna tanpa perubahan arsitektur besar.

---

## Queue Based Processing

Proses berat harus dipindahkan ke queue.

Contoh:

* OCR Processing
* AI Summary
* Notification
* Forecast Calculation

---

## Horizontal Scaling

Aplikasi harus mendukung:

```text
Multiple Application Server
```

tanpa perubahan kode.

---

## Stateless Application

Laravel Application harus stateless.

Session menggunakan:

```text
Redis
```

---

## Database Growth

Target:

```text
100.000+ Transactions
Per User
```

tetap dapat di-query dengan baik.

---

## Future Scaling Strategy

Ketika pengguna meningkat:

* Redis Cluster
* Read Replica
* Queue Worker Scaling
* CDN

---

# Reliability

## Objective

Menjamin integritas dan konsistensi data.

---

## Database Transactions

Operasi finansial wajib menggunakan:

```text
Database Transaction
```

Contoh:

* Transfer Wallet
* Goal Contribution
* OCR Confirmation

---

## Data Consistency

Transfer wajib:

```text
Debit Wallet A
+
Credit Wallet B
```

dalam satu transaksi database.

---

## Backup Strategy

### Daily Backup

Frekuensi:

```text
1x per Hari
```

---

### Weekly Backup

Frekuensi:

```text
1x per Minggu
```

---

### Monthly Backup

Frekuensi:

```text
1x per Bulan
```

---

## Retention Policy

Daily:

```text
7 Hari
```

Weekly:

```text
4 Minggu
```

Monthly:

```text
12 Bulan
```

---

## Disaster Recovery

Recovery Target:

```text
RPO ≤ 24 Jam
```

```text
RTO ≤ 4 Jam
```

---

# Monitoring

## Objective

Memastikan masalah dapat terdeteksi sebelum berdampak pada pengguna.

---

## Application Monitoring

Monitor:

* Response Time
* Error Rate
* Active Users

---

## Queue Monitoring

Monitor:

* Queue Length
* Failed Jobs
* Processing Time

---

## Database Monitoring

Monitor:

* Query Performance
* Slow Queries
* Connection Count

---

## OCR Monitoring

Monitor:

* OCR Success Rate
* OCR Processing Time

---

## AI Monitoring

Monitor:

* Token Usage
* Cost Usage
* AI Success Rate
* AI Response Time

---

## Notification Monitoring

Monitor:

* Telegram Delivery Rate
* Failed Notifications

---

# Logging

## Application Logs

Level:

```text
Info
Warning
Error
Critical
```

---

## Audit Logs

Catat aktivitas penting:

* Login
* Subscription Upgrade
* Wallet Transfer
* OCR Confirmation
* Goal Contribution

---

## Log Retention

Retention:

```text
90 Hari
```

---

# Maintainability

## Code Quality

Standar:

* PSR-12
* Laravel Best Practice
* Service Layer Pattern

---

## Test Coverage

Minimal:

```text
70%
```

untuk business logic.

---

## Documentation

Harus tersedia:

* Product Documentation
* API Documentation
* Database Documentation

---

# Compatibility

## Browser Support

* Chrome
* Edge
* Firefox
* Safari

Versi modern.

---

## Mobile Support

* Android
* iOS

melalui PWA.

---

# Compliance

## Financial Data Handling

Data pengguna harus:

* Aman
* Terenkripsi saat transit
* Tidak dibagikan ke pihak ketiga tanpa izin

---

## Privacy

Sistem harus mematuhi prinsip:

```text
Privacy By Design
```

---

# Non Functional Success Metrics

## Performance

Dashboard:

```text
< 2 Detik
```

API:

```text
< 500 ms
```

---

## Reliability

Data Loss:

```text
0%
```

---

## Availability

Uptime:

```text
99.5%
```

---

## Security

Critical Vulnerability:

```text
0
```

---

## Scalability

Mampu menangani:

```text
10.000+
Active Users
```

tanpa perubahan arsitektur utama.
