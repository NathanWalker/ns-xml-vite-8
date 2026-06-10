import { EventData, Page, View } from '@nativescript/core'
import { HelloWorldModel } from './main-view-model'

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  page.bindingContext = new HelloWorldModel()
}

export function openModal(args: EventData) {
  const page = (args.object as View).page as Page

  page?.showModal('modal-page', {
    context: {
      title: 'NativeScript modal',
      description: 'This modal is defined in modal-page.xml and opened from the main page.',
    },
    closeCallback: () => undefined,
    animated: true,
    fullscreen: false,
  })
}
