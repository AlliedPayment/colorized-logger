const log = require("../logger");

log.debug("debug");
log.info("info");
log.warn("warn");
log.error("error");
log.success("success");
log.fail("fail");

log.debug("debug", { key: "value" });
log.info("info", { key: "value" });
log.warn("warn", { key: "value" });
log.error("error", { key: "value" });
log.success("success", { key: "value" });
log.fail("fail", { key: "value" });
