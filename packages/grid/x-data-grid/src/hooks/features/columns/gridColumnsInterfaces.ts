import { GridColDef, GridStateColDef } from '../../../models/colDef/gridColDef';
import type { GridColumnDimensionProperties } from './gridColumnsUtils';

export type GridColumnLookup = {
  [field: string]: GridStateColDef;
};

export type GridColumnRawLookup = {
  [field: string]: GridColDef | GridStateColDef;
};

export interface GridColumnsState {
  orderedFields: string[];
  lookup: GridColumnLookup;
  columnVisibilityModel: GridColumnVisibilityModel;
  pinnedColumns: GridColumnPinningState;
}

export interface GridPinnedColumnFields {
  left?: string[];
  right?: string[];
}

export interface GridPinnedColumns {
  left: GridStateColDef[];
  right: GridStateColDef[];
}

export type GridColumnPinningState = {
  model: GridPinnedColumnFields;
  visible: GridPinnedColumns;
};

export type GridColumnDimensions = { [key in GridColumnDimensionProperties]?: number };

export interface GridColumnsInitialState {
  columnVisibilityModel?: GridColumnVisibilityModel;
  orderedFields?: string[];
  dimensions?: Record<string, GridColumnDimensions>;
}

export type GridColumnsRawState = Omit<GridColumnsState, 'lookup'> & {
  lookup: GridColumnRawLookup;
};

export type GridHydrateColumnsValue = GridColumnsRawState;

export type GridColumnVisibilityModel = Record<GridColDef['field'], boolean>;
