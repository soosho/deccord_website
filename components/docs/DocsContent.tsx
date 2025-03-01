import { Introduction } from "./sections/Introduction"
import { Specifications } from "./sections/Specifications"
import { Installation } from "./sections/Installation"
import { WalletSetup } from "./sections/WalletSetup"
import { Masternodes } from "./sections/Masternodes"
import { Mining } from "./sections/Mining"
import { ApiReference } from "./sections/ApiReference"

export function DocsContent() {
  return (
    <main className="flex-1 min-w-0 px-6 py-8">
      <div className="prose prose-gray max-w-3xl mx-auto">
        <Introduction />
        <Specifications />
        <Installation />
        <WalletSetup />
        <Masternodes />
        <Mining />
        <ApiReference />
      </div>
    </main>
  )
}