# Complete set of HTML tags

Simple HTML for testing.

## Slim

Install slim:

```bash
sudo apt  install ruby-rubygems
gem install slim # --user-install
```

Alieses for comfort usage

```bash
echo "export PATH='${HOME}/.local/share/gem/ruby/3.3.0/bin/bin:$PATH'" >> ~/.bashrc
echo "alias slim='${HOME}/.local/share/gem/ruby/3.3.0/bin/slimrb -p'" >> ~/.bashrc
# or for global instalation
echo "export PATH='$(gem environment gemdir)/bin:$PATH'" >> /etc/bash.bashrc
echo "alias  slim='$(gem environment gemdir)/bin/slimrb -p'" >> /etc/bash.bashrc
```