import assetMap from "@/content/asset-map.json";

type AssetRecord = { localFile: string; status: string; actualBytes: number; sha256: string };

const map = assetMap as unknown as Record<string, AssetRecord>;

export function sourceAsset(sourceUrl: string): string {
  const record = map[sourceUrl];
  if (!record || record.status !== "ok") {
    throw new Error(`Unmapped PeakSpring asset: ${sourceUrl}`);
  }
  return `/source-assets/${record.localFile.split("/").pop()}`;
}

export function assetExists(sourceUrl: string): boolean {
  const record = map[sourceUrl];
  return record?.status === "ok";
}