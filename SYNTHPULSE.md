# SynthPulse fork of Nango

This branch (`synthpulse`) is the SynthPulse-infra build of Nango, pinned to an
upstream release tag. It exists for two reasons:

1. **Multi-arch image.** Upstream publishes `nangohq/nango-server` for amd64
   only; the SynthPulse Agentic Workstation runs on arm64 hosts (Raspberry Pi,
   arm64 VPS). CI here builds `ghcr.io/synthwave-solutions/nango-server`
   for amd64 + arm64 (`.github/workflows/synthpulse-image.yml`).
2. **Custom providers.** Synthwave-managed provider entries are appended at the
   bottom of `packages/providers/providers.yaml` under the marked section, so
   every deployed image carries them without volume mounts.

Scope stays the free self-hosted edition: Auth + Proxy. Functions, syncs,
webhooks and the Nango MCP server are Enterprise; nothing here enables or
bypasses that gating (Elastic License 2.0). Running your own instance is fine;
offering Nango itself as a managed service to third parties needs a commercial
agreement with Nango.

## Version bump

```bash
git fetch upstream --tags
git rebase --onto v<new> v<old> synthpulse   # replays these few commits
# resolve providers.yaml by re-appending the marked section if needed
git push synthwave synthpulse --force-with-lease
git tag synthpulse-v<new> && git push synthwave synthpulse-v<new>
```

The workstation stack consumes the image via `SP_NANGO_IMAGE`
(`docker-compose.yml`, profile `nango`).
