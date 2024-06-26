export default function loadBalancer(UKDownload, FRDownload) {
  return Promise.race([UKDownload, FRDownload]);
}
