import "./style";
import { registerAll } from "lib-v2/register";
import * as React from "react";
import { PiletApi } from "app-shell";

registerAll((name) => `new-${name}`);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['new-lib-container']: any;
      ['new-lib-button-group']: any;
    }
  }
}

export function setup(app: PiletApi) {
  app.registerTile(
    () => (
      <div className="teaser">
        Welcome to Piral 2 using its own version of the component lib!
        <new-lib-container>
          <new-lib-button-group></new-lib-button-group>
        </new-lib-container>
      </div>
    ),
    {
      initialColumns: 4,
      initialRows: 4,
    }
  );
}
