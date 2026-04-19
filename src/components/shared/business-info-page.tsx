import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type InfoAction = {
  label: string
  href: string
  variant?: 'default' | 'outline'
}

type InfoMetric = {
  value: string
  label: string
}

type InfoCard = {
  title: string
  description: string
  href?: string
  linkLabel?: string
}

type InfoList = {
  title: string
  items: string[]
}

export function BusinessInfoPage({
  title,
  description,
  eyebrow,
  actions,
  metrics,
  cards,
  lists,
  cta,
}: {
  title: string
  description: string
  eyebrow: string
  actions?: InfoAction[]
  metrics?: InfoMetric[]
  cards: InfoCard[]
  lists?: InfoList[]
  cta?: {
    title: string
    description: string
    actionLabel: string
    actionHref: string
  }
}) {
  return (
    <PageShell
      title={title}
      description={description}
      actions={
        actions?.length ? (
          <>
            {actions.map((action, index) => (
              <Button key={`${action.href}-${action.label}-${index}`} variant={action.variant || 'default'} asChild>
                <Link href={action.href}>{action.label}</Link>
              </Button>
            ))}
          </>
        ) : undefined
      }
    >
      <section className="rounded-[2rem] border border-[#73A5CA]/25 bg-[linear-gradient(130deg,rgba(115,165,202,0.2)_0%,rgba(255,200,30,0.22)_52%,rgba(232,127,36,0.2)_100%)] p-6 shadow-[0_18px_45px_rgba(31,45,58,0.1)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2f4960]">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#1f2d3a]">{title}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#2b4b62]">{description}</p>
        {metrics?.length ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/45 bg-[#FEFDDF]/90 px-4 py-3">
                <div className="text-2xl font-semibold text-[#1f2d3a]">{metric.value}</div>
                <p className="text-xs uppercase tracking-[0.12em] text-[#375873]">{metric.label}</p>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        {cards.map((card) => (
          <Card key={card.title} className="border-[#73A5CA]/25 bg-[#FEFDDF]/88 shadow-[0_10px_26px_rgba(31,45,58,0.08)]">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-[#1f2d3a]">{card.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#3d617d]">{card.description}</p>
              {card.href && card.linkLabel ? (
                <Link href={card.href} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#E87F24] hover:text-[#cb6a19]">
                  {card.linkLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </section>

      {lists?.length ? (
        <section className="mt-8 grid gap-4 lg:grid-cols-2">
          {lists.map((list) => (
            <Card key={list.title} className="border-[#73A5CA]/25 bg-white/80">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#1f2d3a]">{list.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-[#35556e]">
                  {list.items.map((item) => (
                    <li key={item} className="rounded-xl border border-[#73A5CA]/18 bg-[#FEFDDF]/70 px-3 py-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>
      ) : null}

      {cta ? (
        <section className="mt-8 rounded-[1.7rem] border border-[#E87F24]/30 bg-[linear-gradient(120deg,rgba(255,200,30,0.24)_0%,rgba(232,127,36,0.2)_100%)] p-6 sm:p-7">
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#1f2d3a]">{cta.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#2f4a5e]">{cta.description}</p>
          <Button asChild className="mt-5 bg-[#E87F24] text-[#FEFDDF] hover:bg-[#cb6a19]">
            <Link href={cta.actionHref}>{cta.actionLabel}</Link>
          </Button>
        </section>
      ) : null}
    </PageShell>
  )
}
