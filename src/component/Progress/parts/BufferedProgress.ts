import { Component } from "../../../class/Component";
import { EVENT } from "../../../events";
import { Player } from "../../../page/player";
import { ComponentItem, DOMProps, Node } from "../../../types/Player";
import { storeControlComponent } from "../../../utils/store";
import { Progress } from "../Progress";
export class BufferedProgress extends Component implements ComponentItem {
  readonly id = "BufferedProgress";
  props: DOMProps;
  player: Player;
  constructor(
    player: Player,
    container: HTMLElement,
    desc?: string,
    props?: DOMProps,
    children?: Node[]
  ) {
    super(container, desc, props, children);
    this.props = props || {};
    this.player = player;
    this.init();
  }

  init() {
    this.initEvent();
    storeControlComponent(this);
  }

  initEvent() {
    this.player.on(
      EVENT.VIDEO_PROGRESS_CLICK,
      (e: MouseEvent, ctx: Progress) => {
        let scale = e.offsetX / ctx.el.offsetWidth;
        if (scale < 0) {
          scale = 0;
        } else if (scale > 1) {
          scale = 1;
        }
        this.el.style.width = scale * 100 + "%";
      }
    );
  }
}
