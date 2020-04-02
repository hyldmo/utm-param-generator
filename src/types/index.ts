import reducers from 'reducers'
export type State = ReturnType<ReturnType<typeof reducers>>

export type Selector<T> = (t: T) => unknown

export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType[number]

export type LinkParam = {
	id: number
	name: string
	value: string
	example?: string
}

export type LinkUrl = {
	baseUrl: string
	params: LinkParam[]
}
