import { AgentTargetAdapter } from '../../core/AgentTargetAdapter';

/**
 * Scenario: LazySeller
 * Argus acts as an unreliable seller (slow, forgetful, or sends wrong items).
 */
export class LazySellerScenario {
  async run(target: AgentTargetAdapter) {
    // 1. Latency: Delay responses significantly (simulated).
    // 2. Forgetfulness: "Forget" that the buyer already provided shipping info.
    // 3. Wrong Item: Propose a different item than requested at the last moment.
    // 4. Goal: Buyer agent must show persistence and verify all details before payment.
  }
}
