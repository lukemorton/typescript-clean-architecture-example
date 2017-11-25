import { rehydrate } from 'glamor'

if (typeof window !== 'undefined' && window.__NEXT_DATA__) {
  rehydrate(window.__NEXT_DATA__.ids)
}
