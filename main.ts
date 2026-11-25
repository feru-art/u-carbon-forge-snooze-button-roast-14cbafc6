import { mkdirSync, writeFileSync } from "node:fs";

const saturdayAlarmRoast =
  "At 6 a.m. Saturday my alarm screamed at me in bed like it caught me cheating with sleep.";

function writeRoast(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", saturdayAlarmRoast, "utf8");
}

writeRoast();
