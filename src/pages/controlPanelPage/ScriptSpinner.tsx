/* eslint-disable @typescript-eslint/lines-between-class-members */
export class ScriptSpinner {
  isInitialized = false;
  tickerAnim!: number;
  rotation = 0;
  currentSlice = 0;
  prizeNodes!: NodeListOf<Element>;
  prizes = [
    {
      text: '1',
      color: 'hsl(60, 88%, 69%)',
    },
    {
      text: '2',
      color: 'hsl(124, 32%, 43%)',
    },
    {
      text: '3',
      color: 'hsl(231, 52%, 46%)',
    },
    {
      text: '4',
      color: 'hsl(0, 52%, 46%)',
    },
  ];

  wheel!: HTMLElement;
  imageBack!: HTMLElement;
  spinner!: HTMLElement;
  trigger!: HTMLElement;
  ticker!: HTMLElement;
  prizeSlice!: number;
  prizeOffset!: number;
  spinnerStyles!: CSSStyleDeclaration;
  spinClass: string = 'is-spinning';
  selectedClass: string = 'selected';

  initialize(): void {
    this.wheel = document.querySelector('.deal-wheel') as HTMLElement;
    this.spinner = this.wheel!.querySelector('.spinner') as HTMLElement;
    this.trigger = this.wheel!.querySelector('.btn-spin') as HTMLElement;
    this.ticker = this.wheel!.querySelector('.ticker') as HTMLElement;
    this.imageBack = this.spinner!.querySelector(
      '.image_backround',
    ) as HTMLElement;

    this.prizeSlice = 360 / this.prizes.length;
    this.prizeOffset = Math.floor(180 / this.prizes.length);
    this.spinnerStyles = window.getComputedStyle(this.spinner);

    const stopRotate = () => {
      this.stopRotateAndSelect();
    };
    this.spinner.addEventListener('transitionend', stopRotate);
  }

  setupWheel(): void {
    if (this.isInitialized) {
      this.rotate();
      return;
    }
    this.isInitialized = true;
    this.initialize();
    this.createPrizeNodes();
    this.prizeNodes = this.wheel.querySelectorAll('.prize');
  }

  createConicGradient(): void {
    this.spinner.setAttribute(
      'style',
      `background: conic-gradient(
          from -90deg,
          ${this.prizes
            .map(
              ({ color }, i) =>
                `${color} 0 ${
                  (100 / this.prizes.length) * (this.prizes.length - i)
                }%`,
            )
            .reverse()}
                );`,
    );
  }

  createPrizeNodes(): void {
    this.prizes.forEach((value) => {
      let innerRotation: number;
      switch (value.text) {
        case '4':
          innerRotation = 35;
          break;
        case '1':
          innerRotation = 145;
          break;
        case '2':
          innerRotation = 235;
          break;
        case '3':
          innerRotation = 305;
          break;
        default:
          innerRotation = 0;
          break;
      }
      this.spinner.insertAdjacentHTML(
        'beforeend',
        `<li class="prize" style="--rotate: ${innerRotation}deg">
                <span class="text">${value.text}</span>
                </li>`,
      );
    });
  }

  static spinertia(minParam: number, maxParam: number) {
    const min = Math.ceil(minParam);
    const max = Math.floor(maxParam);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  runTickerAnimation() {
    if (this === undefined) {
      return;
    }

    const values = this.spinnerStyles.transform
      .split('(')[1]
      .split(')')[0]
      .split(',');
    const a = Number.parseInt(values[0], 10);
    const b = Number.parseInt(values[1], 10);
    let rad = Math.atan2(b, a);

    if (rad < 0) rad += 2 * Math.PI;
    const angle = Math.round(rad * (180 / Math.PI));
    const slice = Math.floor(angle / this.prizeSlice);

    if (this.currentSlice !== slice) {
      this.ticker.style.animation = 'none';
      setTimeout(() => {
        this.ticker.style.animation = '';
      }, 1);
      this.currentSlice = slice;
    }
    this.tickerAnim = requestAnimationFrame(this.runTickerAnimation);
  }

  selectPrize(): void {
    let tmpRotation = Math.abs(this.rotation + 90);
    let selected = 0;
    if (tmpRotation > 360) {
      tmpRotation -= 360;
    }
    if (tmpRotation > 0 && tmpRotation <= 110) {
      selected = 3;
    } else if (tmpRotation > 110 && tmpRotation <= 180) {
      selected = 2;
    } else if (tmpRotation > 180 && tmpRotation <= 250) {
      selected = 1;
    } else if (tmpRotation > 250 && tmpRotation <= 360) {
      selected = 0;
    }
    this.prizeNodes[selected].classList.add(this.selectedClass);
  }

  // static because we don't use 'this.'
  static returnPrize(): string | undefined {
    return document
      .getElementsByClassName('selected')[0]
      .textContent?.toString()
      .trim();
  }

  rotate() {
    this.trigger.setAttribute('disabled', '0');
    // this.rotation = Math.floor(
    //   Math.random() * 360 + ScriptSpinner.spinertia(500, 3000),
    // );
    this.rotation = 4 + ScriptSpinner.spinertia(500, 3000);
    this.prizeNodes.forEach((prize) =>
      prize.classList.remove(this.selectedClass),
    );
    this.wheel.classList.add(this.spinClass);
    this.spinner.style.setProperty('--rotate', this.rotation.toString());
    this.ticker.style.animation = 'none';
    this.runTickerAnimation();
  }

  stopRotateAndSelect() {
    cancelAnimationFrame(this.tickerAnim);
    this.rotation %= 360;
    this.selectPrize();
    console.log(ScriptSpinner.returnPrize());
    this.wheel.classList.remove(this.spinClass);
    this.spinner.style.setProperty('--rotate', this.rotation.toString());
    this.trigger.removeAttribute('disabled');
  }
}
