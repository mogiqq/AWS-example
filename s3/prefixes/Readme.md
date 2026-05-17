# Create Bucket
```sh
export AWS_ACCESS_KEY_ID="你的AccessKey"
export AWS_SECRET_ACCESS_KEY="你的SecretKey"
aws s3 mb s3://prefixes-fun-ab-0516
```
# Create Folder
```sh
aws s3api put-object --bucket="prefixes-fun-ab-0516" --key="hello/"
```

# Create many Folder
```sh
aws s3api put-object --bucket="prefixes-fun-ab-0516" --key="Lorem/ipsum/dolor/sit/amet/consectetur/adipiscing/elit/Quisque/ut/commodo/felis/Cras/ullamcorper/sapien/nec/libero/imperdiet/volutpat/Donec/ut/laoreet/erat/nec/lacinia/orci/Etiam/augue/turpis/maximus/vitae/posuere/in/dapibus/et/lacus/Mauris/tincidunt/congue/magna/sollicitudin/tristique/Sed/pellentesque/euismod/enim/vel/dictum/purus/Cras/condimentum/risus/et/placerat/fringilla/nunc/ex/tincidunt/lacus/quis/fermentum/mauris/tortor/sed/est/Phasellus/hendrerit/volutpat/lorem/ut/commodo/sapien/In/neque/augue/faucibus/a/est/at/tincidunt/blandit/ante/Aliquam/ultrices/convallis/eleifend/Aenean/sed/fringilla/ipsum/Aliquam/nec/vehicula/lorem/Nunc/eleifend/dolor/et/tristique/rhoncus/Nulla/est/felis/pretium/sed/diam/eu/tempus/dictum/mauris/Cras/ac/ultricies/mi/Nullam/feugiat/malesuada/auctor/Maecenas/elementum/lobortis/justo/ullamcorper/vehicula/Sed/sit/amet/nunc/a/tellus/ultrices/consequat/Pellentesque/volutpat/vitae/quam/at/aliquet/Fusce/vel/eros/aliquet/suscipit/felis/a/porta/orci/nam/sdf/sear/fsae/fkdsa/feak/daei/daf/"
```
# Try and break the 1024 limit
```sh
aws s3api put-object --bucket="prefixes-fun-ab-0516" --key="Lorem/ipsum/dolor/sit/amet/consectetur/adipiscing/elit/Quisque/ut/commodo/felis/Cras/ullamcorper/sapien/nec/libero/imperdiet/volutpat/Donec/ut/laoreet/erat/nec/lacinia/orci/Etiam/augue/turpis/maximus/vitae/posuere/in/dapibus/et/lacus/Mauris/tincidunt/congue/magna/sollicitudin/tristique/Sed/pellentesque/euismod/enim/vel/dictum/purus/Cras/condimentum/risus/et/placerat/fringilla/nunc/ex/tincidunt/lacus/quis/fermentum/mauris/tortor/sed/est/Phasellus/hendrerit/volutpat/lorem/ut/commodo/sapien/In/neque/augue/faucibus/a/est/at/tincidunt/blandit/ante/Aliquam/ultrices/convallis/eleifend/Aenean/sed/fringilla/ipsum/Aliquam/nec/vehicula/lorem/Nunc/eleifend/dolor/et/tristique/rhoncus/Nulla/est/felis/pretium/sed/diam/eu/tempus/dictum/mauris/Cras/ac/ultricies/mi/Nullam/feugiat/malesuada/auctor/Maecenas/elementum/lobortis/justo/ullamcorper/vehicula/Sed/sit/amet/nunc/a/tellus/ultrices/consequat/Pellentesque/volutpat/vitae/quam/at/aliquet/Fusce/vel/eros/aliquet/suscipit/felis/a/porta/orci/nam/sdf/sear/fsae/fkdsa/feak/daei/daf/hello.txt" --body="hello.txt"
```