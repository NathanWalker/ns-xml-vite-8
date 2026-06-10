import { EventData, Page, ShownModallyData, View } from '@nativescript/core'

export function onShownModally(args: ShownModallyData) {
  const page = args.object as Page
  page.bindingContext = args.context ?? {}
}

export function closeModal(args: EventData) {
  const page = (args.object as View).page as Page
  page?.closeModal()
}