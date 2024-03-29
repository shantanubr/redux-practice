import { bindActionCreators, createStore } from '../src'
import type { ActionCreator, Store } from '../src'
import { todos } from './helpers/reducers'
import * as actionCreators from './helpers/actionCreators'

describe('bindActionCreators', () => {
  let store: Store
  let actionCreatorFunctions: any

  beforeEach(() => {
    store = createStore(todos)
    actionCreatorFunctions = { ...actionCreators }
    Object.keys(actionCreatorFunctions).forEach(key => {
      if (typeof actionCreatorFunctions[key] !== 'function') {
        delete actionCreatorFunctions[key]
      }
    })
  })

  it('wraps the action creators with the dispatch function', () => {
    const boundActionCreators = bindActionCreators(
      actionCreators,
      store.dispatch
    )
    expect(Object.keys(boundActionCreators)).toEqual(
      Object.keys(actionCreatorFunctions)
    )

    const action = boundActionCreators.addTodo('Hello')
    expect(action).toEqual(actionCreators.addTodo('Hello'))
    expect(store.getState()).toEqual([{ id: 1, text: 'Hello' }])
  })

  it('wraps action creators transparently', () => {
    const uniqueThis = {}
    const argArray = [1, 2, 3]
    function actionCreator(this: any) {
      return { type: 'UNKNOWN_ACTION', this: this, args: [...arguments] }
    }
    const boundActionCreator = bindActionCreators(actionCreator, store.dispatch)

    const boundAction = boundActionCreator.apply(uniqueThis, argArray as [])
    const action = actionCreator.apply(uniqueThis, argArray as [])
    expect(boundAction).toEqual(action)
    expect(boundAction.this).toBe(uniqueThis)
    expect(action.this).toBe(uniqueThis)
  })

  it('skips non-function values in the passed object', () => {
    // as this is testing against invalid values, we will cast to unknown and then back to ActionCreator<any>
    // in a typescript environment this test is unnecessary, but required in javascript
    const boundActionCreators = bindActionCreators(
      {
        ...actionCreators,
        foo: 42,
        bar: 'baz',
        wow: undefined,
        much: {},
        test: null
      } as unknown as ActionCreator<any>,
      store.dispatch
    )
    expect(Object.keys(boundActionCreators)).toEqual(
      Object.keys(actionCreatorFunctions)
    )
  })

  it('supports wrapping a single function only', () => {
    const actionCreator = actionCreators.addTodo
    const boundActionCreator = bindActionCreators(actionCreator, store.dispatch)

    const action = boundActionCreator('Hello')
    expect(action).toEqual(actionCreator('Hello'))
    expect(store.getState()).toEqual([{ id: 1, text: 'Hello' }])
  })

  it('throws for an undefined actionCreator', () => {
    expect(() => {
      // @ts-expect-error
      bindActionCreators(undefined, store.dispatch)
    }).toThrow(
      `bindActionCreators expected an object or a function, but instead received: 'undefined'. ` +
        `Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`
    )
  })

  it('throws for a null actionCreator', () => {
    expect(() => {
      // @ts-expect-error
      bindActionCreators(null, store.dispatch)
    }).toThrow(
      `bindActionCreators expected an object or a function, but instead received: 'null'. ` +
        `Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`
    )
  })

  it('throws for a primitive actionCreator', () => {
    expect(() => {
      bindActionCreators(
        'string' as unknown as ActionCreator<any>,
        store.dispatch
      )
    }).toThrow(
      `bindActionCreators expected an object or a function, but instead received: 'string'. ` +
        `Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`
    )
  })
})
