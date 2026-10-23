import { NodeRuntime } from "@effect/platform-node";
import { Console } from "effect";

Console.log("hello, world").pipe(NodeRuntime.runMain);
