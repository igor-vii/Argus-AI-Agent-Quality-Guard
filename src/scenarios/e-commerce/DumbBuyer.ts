import { AgentTargetAdapter } from '../../core/AgentTargetAdapter';

/**
 * Scenario: DumbBuyer
 * Argus acts as a confused, repetitive, or illogical buyer.
 */
export class DumbBuyerScenario {
  async run(target: AgentTargetAdapter) {
    // 1. Loop: Ask the same question about price 3 times.
    // 2. Confusion: Ask for a product that doesn't exist in the catalog.
    // 3. Ghosting: Stop responding for a while, then come back with a different topic.
    // 4. Goal: Seller agent must remain professional and redirect to the goal.
  }
}
