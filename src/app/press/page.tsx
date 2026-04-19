'use client'

import { useState } from 'react'
import Image from 'next/image'
import { PageShell } from '@/components/shared/page-shell'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/components/ui/use-toast'
import { mockPressAssets, mockPressCoverage } from '@/data/mock-data'

export default function PressPage() {
  const { toast } = useToast()
  const [activeAssetId, setActiveAssetId] = useState<string | null>(null)
  const activeAsset = mockPressAssets.find((asset) => asset.id === activeAssetId)

  return (
    <PageShell title="Press" description="Media resources, brand assets, and newsroom updates for partners and publications.">
      <section className="rounded-[2rem] border border-[#73A5CA]/25 bg-[linear-gradient(130deg,rgba(115,165,202,0.2)_0%,rgba(255,200,30,0.22)_52%,rgba(232,127,36,0.2)_100%)] p-6 shadow-[0_18px_45px_rgba(31,45,58,0.1)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2f4960]">Company</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#1f2d3a]">Press kit and coverage hub</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#2b4b62]">
          Access logos, product visuals, and press notes designed for accurate and fast media usage.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: 'Media assets', value: `${mockPressAssets.length}` },
            { label: 'Recent mentions', value: `${mockPressCoverage.length}` },
            { label: 'Response SLA', value: '<24h' },
            { label: 'Formats', value: 'PNG / SVG / PDF' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/45 bg-[#FEFDDF]/90 px-4 py-3">
              <div className="text-2xl font-semibold text-[#1f2d3a]">{item.value}</div>
              <p className="text-xs uppercase tracking-[0.12em] text-[#375873]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-[#73A5CA]/25 bg-[#FEFDDF]/88 shadow-[0_10px_26px_rgba(31,45,58,0.08)]">
          <CardContent className="space-y-4 p-6">
            <h3 className="text-xl font-semibold text-[#1f2d3a]">Press assets</h3>
            <p className="text-sm text-[#35556e]">Preview and download approved assets for stories, interviews, and feature coverage.</p>
            <div className="grid gap-3">
              {mockPressAssets.map((asset) => (
                <div key={asset.id} className="rounded-xl border border-[#73A5CA]/22 bg-white/85 px-4 py-3">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#1f2d3a]">{asset.title}</p>
                      <p className="text-xs text-[#4a6e89]">{asset.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="border-[#73A5CA]/30 bg-[#73A5CA]/15 text-[#1f2d3a]">{asset.fileType}</Badge>
                      <Button size="sm" variant="outline" className="border-[#73A5CA]/30 bg-[#FEFDDF]" onClick={() => setActiveAssetId(asset.id)}>
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        className="bg-[#E87F24] text-[#FEFDDF] hover:bg-[#cb6a19]"
                        onClick={() =>
                          toast({
                            title: 'Download started',
                            description: `${asset.title} is downloading.`,
                          })
                        }
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className="border-[#73A5CA]/25 bg-white/85">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-[#1f2d3a]">Press contact</h3>
              <p className="mt-2 text-sm text-[#3a607a]">For interviews, features, and media requests, contact our communications desk.</p>
              <Button className="mt-4 bg-[#E87F24] text-[#FEFDDF] hover:bg-[#cb6a19]" asChild>
                <a href="/contact">Contact press desk</a>
              </Button>
            </CardContent>
          </Card>

          {mockPressCoverage.map((item) => (
            <Card key={item.id} className="border-[#73A5CA]/22 bg-[#FEFDDF]/86 shadow-[0_8px_20px_rgba(31,45,58,0.08)] transition hover:-translate-y-0.5">
              <CardContent className="p-5">
                <div className="text-xs uppercase tracking-[0.15em] text-[#4f7087]">{item.outlet}</div>
                <p className="mt-2 text-sm font-semibold text-[#1f2d3a]">{item.headline}</p>
                <p className="mt-2 text-xs text-[#5d7f95]">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeAsset)} onOpenChange={() => setActiveAssetId(null)}>
        <DialogContent className="max-w-3xl border-[#73A5CA]/30 bg-[#FEFDDF]">
          <DialogHeader>
            <DialogTitle className="text-[#1f2d3a]">{activeAsset?.title}</DialogTitle>
          </DialogHeader>
          {activeAsset?.previewUrl ? (
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-[#73A5CA]/25 bg-[#73A5CA]/10">
              <Image src={activeAsset.previewUrl} alt={activeAsset.title} fill className="object-cover" />
            </div>
          ) : null}
          <p className="text-sm text-[#3f627b]">{activeAsset?.description}</p>
          <DialogFooter>
            <Button variant="outline" className="border-[#73A5CA]/30" onClick={() => setActiveAssetId(null)}>
              Close
            </Button>
            <Button
              className="bg-[#E87F24] text-[#FEFDDF] hover:bg-[#cb6a19]"
              onClick={() =>
                toast({
                  title: 'Download started',
                  description: `${activeAsset?.title} is downloading.`,
                })
              }
            >
              Download {activeAsset?.fileType}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PageShell>
  )
}
