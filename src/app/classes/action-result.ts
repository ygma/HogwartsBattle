export class ActionResult<T> {
  constructor(
    readonly isSuccess: boolean,
    readonly log: string,
    readonly obj: T = null,
  ) {

  }
}