# MongoDB Engineering Lab

A production-shaped MongoDB lab covering **document modeling, indexes, aggregation, consistency choices, and cursor pagination**.

## 30-second read

The lab starts from an order aggregate: keep data together when it is read together, then measure when that model stops working. Queries and indexes are treated as part of the design, not an afterthought.

## Run it

- [GitHub Codespaces](https://codespaces.new/MountainBridge/MongoDBEngineeringLab) — full environment.
- [MongoDB Playground](https://mongoplayground.net/) — useful for isolated aggregation/modeling snippets; not the authoritative runtime.

```bash
docker compose up -d
npm install
npm test
```

## Evidence matrix

| Concern | Evidence |
|---|---|
| Modeling | `src/model.js` keeps an order aggregate together |
| Indexing | customer/time and status/time indexes |
| Pagination | `src/query.js` uses a time cursor rather than offset-only paging |
| Aggregation | status/value summary pipeline |
| Reproducibility | MongoDB 8 Compose environment + CI |

## Failure cases

- Unbounded embedded arrays.
- Missing/incorrect compound indexes.
- Duplicate writes.
- Pagination while new orders arrive.
- Read consistency requirements that outgrow a single-document model.

The interview goal is to defend the modeling decision and explain its operational failure mode.
