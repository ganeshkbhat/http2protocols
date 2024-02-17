/*
License: MIT
Dynamic CGI serving using dynamic path imports for 
     CGI supporting executable for Interpreted languages Embedded Distribution
Contribution: 2018 Ganesh K. Bhat <ganeshsurfs@gmail.com> 
*/

/* eslint no-console: 0 */

'use strict';


interface ProtocolInterface {
    config: any;
    connect: () => any
    disconnect: () => any
    serve: () => any
    send: () => any
    receive: () => any
}

export class ProtocolsBase implements ProtocolInterface {
    config: any

    constructor(config: any) {
        this.config = config
    }

    connect() {

    }

    disconnect() {

    }

    serve() {

    }

    send() {

    }

    receive() {

    }
}

export class http2tcp extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class http2tls extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class http2udp extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class http2socksv4 extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class http2socksv4a extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class http2socksv5 extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class http2socks extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class http2socket extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class http2ftp extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class http2ftps extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class http2ws extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2tcp extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2tls extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2udp extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2socksv4 extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2socksv4a extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2socksv5 extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2socks extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2socket extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2ftp extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2ftps extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}

export class ws2ws extends ProtocolsBase {
    constructor(config: any) {
        super(config)
    }
}


export class handlers extends ProtocolsBase {
    constructor(config: any) {
        super(config)

        if (config.protocol === "udp") {

        } else if (config.protocol === "tcp") {

        } else if (config.protocol === "tls") {

        } else if (config.protocol === "ws") {

        } else if (config.protocol === "socks") {

        } else if (config.protocol === "SOCKSv4") {

        } else if (config.protocol === "SOCKSv4a") {

        } else if (config.protocol === "SOCKSv5") {

        } else if (config.protocol === "socket") {

        } else if (config.protocol === "ftp") {

        }
    }

    init() {
        return {
            connect: this.connect,
            disconnect: this.disconnect,
            serve: this.serve,
            send: this.send,
            receive: this.receive
        }
    }
}


// if (!isBrowser()) {
//     export const http2tcp = http2tcp;
//     module.exports.http2tls = http2tls;
//     module.exports.http2udp = http2udp;
//     module.exports.http2socksv4 = http2socksv4;
//     module.exports.http2socksv4a = http2socksv4a;
//     module.exports.http2socksv5 = http2socksv5;
//     module.exports.http2socks = http2socks;
//     module.exports.http2socket = http2socket;
//     module.exports.http2ftp = http2ftp;
//     module.exports.http2ftps = http2ftps;
//     module.exports.http2ws = http2ws;
//     module.exports.ws2tcp = ws2tcp;
//     module.exports.ws2tls = ws2tls;
//     module.exports.ws2udp = ws2udp;
//     module.exports.ws2socksv4 = ws2socksv4;
//     module.exports.ws2socksv4a = ws2socksv4a;
//     module.exports.ws2socksv5 = ws2socksv5;
//     module.exports.ws2socks = ws2socks;
//     module.exports.ws2socket = ws2socket;
//     module.exports.ws2ftp = ws2ftp;
//     module.exports.ws2ftps = ws2ftps;
//     module.exports.ws2ws = ws2ws;
//     module.exports = handlers;
// }
