import { Context } from '@nuxt/types'

export default ({ redirect, app: { $accessor } }: Context) => {
  const res = $accessor.age.hoge()
  console.log(res)
}