# Chainlink Tools

## Service Agreement Requester

Usage:

### Single Oracle

```bash
$ ./sa_requester/bin/run -a ../internal/fixtures/web/hello_world_agreement.json http://127.0.0.1:6688/v2/service_agreements
┌─────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ (index) │                                                               signature                                                                │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│    0    │ '0x8cc979d5b00ad4f529acc98c05292f67cd14cdff346ce4124a789856bc88e9805a329d2913d5f97a0d19a78498aae40f59c279da9cbd36b777bfb7eee7a5fdb700' │
└─────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```

### Multiple Oracles

```bash
$ ./sa_requester/bin/run -a ../internal/fixtures/web/hello_world_agreement.json "http://127.0.0.1:6688/v2/service_agreements http://localhost:6688/v2/service_agreements"
┌─────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ (index) │                                                               signature                                                                │
├─────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│    0    │ '0x8cc979d5b00ad4f529acc98c05292f67cd14cdff346ce4124a789856bc88e9805a329d2913d5f97a0d19a78498aae40f59c279da9cbd36b777bfb7eee7a5fdb700' │
│    1    │ '0x8cc979d5b00ad4f529acc98c05292f67cd14cdff346ce4124a789856bc88e9805a329d2913d5f97a0d19a78498aae40f59c279da9cbd36b777bfb7eee7a5fdb700' │
└─────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```
