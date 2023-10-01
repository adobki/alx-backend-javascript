// Returns output from promise that gets resolved first

export default async function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
