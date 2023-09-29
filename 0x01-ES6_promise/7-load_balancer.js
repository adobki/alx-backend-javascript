// Returns first resolved promise promises

export default async function loadBalancer(chinaDownload, USDownload) {
  USDownload.then((data) => data);
  return chinaDownload.then((data) => data);
}
