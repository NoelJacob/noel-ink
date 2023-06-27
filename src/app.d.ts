// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import type {PlanetScaleDatabase} from "drizzle-orm/planetscale-serverless"
import * as schema from "$lib/db/schema"

declare namespace App {
  interface Locals {
    db: PlanetScaleDatabase<schema>
  }
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}
