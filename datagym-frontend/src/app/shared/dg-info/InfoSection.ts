
export type argumentType = {[key: string]: number | string};

export class InfoSection {

  /**
   * Each row requires an icon with its description
   *
   * The icon is defined as all css classes like 'fas fa-home'
   */
  public rows: {
    left: string,
    right: string,
    arg ?: string
  }[] = [];

  private readonly leftCol: number = undefined;
  public readonly icon: boolean = false;

  get rowLeftCol(): string {
    return `col-${ this.leftCol }`;
  }

  get rowRightCol(): string {
    return `col-${ 12 - this.leftCol }`;
  }

  private constructor(
    public title: string,
    icon?: boolean,
    leftCol?: number
  ) {
    // css bootstraps col-X number for the left column, default 10
    this.leftCol = (!!leftCol && leftCol > 0 && leftCol <= 12) ? leftCol : 10;
    // is the right content a css class to define an icon?
    this.icon = !!icon;
  }

  public static EXPLANATION(title: string, leftCol?: number): InfoSection {
    return new InfoSection(title, false, leftCol ? leftCol : 7);
  }

  public addTextRow(key: string, description: string, arg ?: string): InfoSection {
    // note: the arguments are flipped
    return this.add(description, key, arg);
  }

  public add(left: string, right: string, arg ?: string): InfoSection {
    const row = {
      left: left,
      right: right,
      arg: !!arg ? arg : ''
    };
    this.rows.push(row);

    return this;
  }
}
