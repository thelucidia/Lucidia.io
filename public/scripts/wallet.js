jQuery(function ($) {
  if (!window.ethereum || !window.ethereum.isMetaMask) {
    return;
  }
  window.ethereum
    .request({
      method: 'eth_accounts',
      params: [],
    })
    .then(function (addresses) {
      if (addresses.length) {
        var address = addresses[0];
        var els = /^(0x\w{4})(.*)(\w{4})$/i.exec(address);
        if (els.length == 4) {
          address = els[1] + '...' + els[3];
        }
        $('.wallet-address').text(address);
      }
    });
});
