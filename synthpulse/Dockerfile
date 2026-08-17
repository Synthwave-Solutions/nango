# Self-hosted single image for the SynthPulse stack: upstream's base image
# (built from the repo-root Dockerfile) plus exactly what upstream's
# Dockerfile.self_hosted layers on top of its published base. Kept as a
# wrapper because that file hardcodes FROM nangohq/nango:<hash>, which a
# fork build cannot point at its own registry.
ARG BASE_IMAGE=ghcr.io/synthwave-solutions/nango-base:synthpulse
FROM ${BASE_IMAGE}

ENV SERVER_RUN_MODE=DOCKERIZED

RUN true \
  && rm -rf packages/jobs \
  && rm -rf packages/runner \
  && rm -rf packages/persist

CMD ["packages/server/entrypoint.sh"]
