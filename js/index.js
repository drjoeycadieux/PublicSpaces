/* 
ISC License

Copyright (c) 2023 Joey Cadieux

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

*/
var cssRule =
    "color: firebrick;" +
    "font-size: 70px;" +
    "font-weight: bold;" +
    "text-shadow: 1px 1px 10px rgb(0, 0, 0);" +
    "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
console.log("%cStop! TeamLitho SecurityTeam", cssRule);

var cssRule =
    "color: black;" +
    "padding: 1rem;" +
    "font-size: 25px;" +
    "font-weight: sans-serif;" +
    "text-shadow: none;" +
    "border-radius: 15px;" +
    "background-color: 	#FFFF66;"
"filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
console.log(
    "%c Warning! Using this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.Do not enter or paste code that you do not understand.",
    cssRule
);