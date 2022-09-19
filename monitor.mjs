import e from "pm2";
import { spawn as o } from "child_process";
import r from "fs";
const i = () => {
    const e = r.openSync("~/forever_out.log", "a"),
        i = r.openSync("~/forever_err.log", "a");
    o("./shell-scripts/downgrade.sh", [], { detached: !0, stdio: ["ignore", e, i] }).unref();
};
e.connect((o) => {
    o && (console.error(o), process.exit(2)),
        e.start(
            { name: "piSignage", script: "pisignage.js", cwd: ".", node_args: "--experimental-specifier-resolution=node", out_file: "~/forever_out.log", error_file: "~/forever_err.log", maxRestarts: 10, time: !0, treekill: !1 },
            function (o, r) {
                if ((e.disconnect(), o)) throw o;
                setTimeout(function () {
                    e.list((e, o) => {
                        if (o)
                            for (const e of o)
                                if ("piSignage" === e.name) {
                                    0 === e.pm2_env.exit_code ? console.log("piSignage is running fine") : (console.log("piSignage has crashed within "), i());
                                    break;
                                }
                    });
                }, 6e4);
            }
        );
});
