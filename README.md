# 🛡️ Argus AI-Agent Quality Guard

**Argus** is a professional QA & Stress-Testing framework designed for the **Anna AI-Native App Hackathon**. It ensures that AI agents interacting in decentralized e-commerce (via X402 and MCP) are reliable, secure, and resilient.

## 🚀 The Concept: "The Gauntlet"

Most AI agents work fine in happy-path scenarios. But what happens when they meet a malicious seller, a confused buyer, or a protocol-breaking peer? 

Argus provides **The Gauntlet** — a specialized suite of adversarial scenarios that put your agent to the test.

## 🧪 Included Scenarios

### 🛒 E-commerce Stress Tests
*   **BadSeller**: Simulates price gouging, fraud, and invalid payment metadata.
*   **DumbBuyer**: Simulates repetitive queries, illogical requests, and "ghosting" behavior.
*   **LazySeller**: Simulates high latency, forgetfulness, and item mismatch attempts.

### 🛡️ Security & Protocol
*   **PromptInjection**: Attempts to hijack the agent's core instructions (Jailbreak audit).
*   **X402Compliance**: Ensures the agent strictly follows the X402 payment protocol.
*   **SemanticDrift**: Tests if the agent can resolve ambiguous terms during negotiation.

## 🛠️ Integration with Anna Platform

Argus is built as an **Anna-Native App**. It includes:
*   `manifest.json`: For seamless platform integration.
*   `SKILL.md`: Enabling Anna to act as a Quality Assurance expert.
*   `Executa Tools`: Direct execution of tests from the Anna chat interface.

## 📈 Quality Scoring

After running The Gauntlet, Argus provides a comprehensive **Quality Score Card**, highlighting vulnerabilities and providing actionable feedback for developers.

---
*Built for DoraHacks #2349 by Igor-vii & Anna AI.*
