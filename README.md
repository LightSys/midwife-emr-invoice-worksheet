# Mercy Maternity Center, Invoice Worksheet

This is a small and quickly thrown together project for Mercy Maternity Center
that provides an invoice worksheet to be used from within Midwife-EMR.

## To Use

Create a subdirectory called `static/invoiceWorksheet` and place these files
in it, which are referenced by index.html:

- bootstrap.min.css, v3.3.6
- bootstrap.min.js, v3.3.6
- jquery.min.js, v1.11.0

Since Midwife-EMR often runs without an Internet connection, a CDN could not
be used.

```
./node_modules/.bin/webpack
```

## License

Copyright (C) 2017-2018 LightSys Technology Services, Inc.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

See the file named AGPLv3.txt for license details.
