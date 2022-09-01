import "./style";
import * as React from "react";
import { PiletApi } from "app-shell";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['lib-container']: any;
      ['lib-button-group']: any;
    }
  }
}

export function setup(app: PiletApi) {
  app.registerTile(
    () => (
      <div className="teaser">
        Welcome to Piral 1 using the shared version of the component lib!
        <lib-container>
          <lib-button-group></lib-button-group>
        </lib-container>
      </div>
    ),
    {
      initialColumns: 4,
      initialRows: 4,
    }
  );
}
