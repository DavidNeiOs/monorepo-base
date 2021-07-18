/**
 * A team, containing one or more chat channels
 * @public
 *
 * @remarks
 * The {@link @shlack/types#isTeam} type guard may be used to
 * detect whether a value conforms to this interface
 */
export interface IPost {
  title: string;
  description: string;
  id: string;
}
