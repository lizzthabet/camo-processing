import * as p5 from "p5"
import { VoronoiSites } from "voronoi/*"

export interface NoisePatternConfig {
  increment: number,
  scale: number,
  nSeed: number,
  nDetail: number,
  nAdjust: number,
  rNumThresh: number,
  rHueThresh: number,
  rSatThresh: number,
  rBriThresh: number,
}

export enum NoisePatternSetting {
  increment,
  scale,
  nSeed,
  nDetail,
  nAdjust,
  rNumThresh,
  rHueThresh,
  rSatThresh,
  rBriThresh,
}

export type RgbaColor = [number, number, number, number]

export type Color = [number, number, number]

export function isColor(array: number[]): array is Color {
  return (array as Color).length === 3
}

export type ColorList = Color[]

export type Cluster = ColorList[]

export type DistanceCalculation = (colorA: Color, colorB: Color) => number

export interface NearestCentroid {
  centroid: Color,
  index: number,
}
export interface ValueRange {
  min: number;
  max: number;
}

export enum ColorMode {
  RGB = 'rgb',
  HSB = 'hsb',
}

export enum Pattern {
  SHAPE = 'shape-disruptive',
  NOISE = 'noise'
}

export interface CreatePatternsInput {
  colorMode: ColorMode,
  files: FileList,
  colorPaletteSize: number,
  patternHeight: number,
  patterns: { [key in Pattern]: boolean },
  patternWidth: number,
}

export interface ColorUploadNoisePatternSettings {
  files: FileList;
  sourceColor: ColorMode;
  destinationColor: ColorMode;
}

export interface ColorPaletteInput {
  colors: ColorList;
  colorMode: ColorMode;
  colorPaletteSize: number;
}

export interface ColorPaletteOutput {
  colorPalette: ColorList;
  colorClusters: Cluster;
}

export interface ColorPaletteViewOutput {
  palette: ColorPaletteOutput;
  paletteCanvas: HTMLCanvasElement;
  colorsCanvas: HTMLCanvasElement;
}

export interface ColorPaletteState {
  colorPalette: ColorList;
  colorClusters: Cluster;
}

export interface ShapeDisruptiveInput {
  canvas: HTMLCanvasElement;
  colorPalette: ColorList;
  numSites: number;
  options: ShapeDisruptiveOptions;
  patternHeight: number;
  patternWidth: number;
}

export interface ShapeDisruptiveOptions {
  reuseColorPairings?: [Color, Color][];
  reuseSites?: VoronoiSites;
}

export interface ShapeDisruptiveOutput {
  canvas: HTMLCanvasElement;
  colorPairings: [Color, Color][];
  sites: VoronoiSites;
}

export interface NoisePatternInput {
  canvas: HTMLCanvasElement;
  colorClusters: Cluster;
  colorPalette: ColorList;
  noiseColors: ColorList;
  noiseColorPalette: ColorList;
  options: NoisePatternOptions;
  patternHeight: number;
  patternWidth: number;
}

export interface NoisePatternOptions {
  mapOriginalSourceColors?: boolean;
}

export interface NoisePatternOutput {
  canvas: HTMLCanvasElement;
}
